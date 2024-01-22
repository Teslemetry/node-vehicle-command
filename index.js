"use strict"
const fs = require('fs')
const crypto = require('crypto');
const { UniversalMessage, CarServer, Signatures } = require('./protobuf')

const labelMessageAuth = "authenticated command"
const publicKey = fs.readFileSync('./publickey.pem')
const privateKey = fs.readFileSync('./privatekey.pem')
const counter = 0

const sendCommand = async (access_token, vehicle_tag, command, region = "na") => {
    // Payload
    var action = (new CarServer.VehicleControlHonkHornAction()).serializeBinary();

    // Destination
    var destination = new UniversalMessage.Destination();
    destination.setDomain(UniversalMessage.Domain.DOMAIN_VEHICLE_SECURITY)

    // Routable Message (unsigned)
    var routable_message = new UniversalMessage.RoutableMessage(action);
    routable_message.setToDestination(destination);
    routable_message.setProtobufMessageAsBytes(action)
    routable_message.setFlags(UniversalMessage.Flags.FLAG_USER_COMMAND)
    routable_message.setUuid(crypto.randomBytes(16))

    // KeyItendity
    var key_identity = new Signatures.KeyIdentity();
    key_identity.setPublicKey(publicKey)

    // HMAC
    var hmac_personalized_data = new Signatures.HMAC_Personalized_Signature_Data()
    hmac_personalized_data.setCounter(counter)
    hmac_personalized_data.setExpiresAt(Math.floor(Date.now() / 1000) + 30)
    //hmac_personalized_data.setEpoch()
    let hmac = crypto.createHmac('sha256', privateKey)
    hmac.update(routable_message.serializeBinary())
    hmac_personalized_data.setTag(hmac.digest())
    console.log(hmac.digest().toString('hex'))

    // Signature
    var signature = new Signatures.SignatureData();
    signature.setSignerIdentity(key_identity)
    signature.setHmacPersonalizedData(hmac_personalized_data)

    routable_message.setSignatureData(signature)

    //
    //routable_message.setRequestUuid
    //
    //routable_message.setSessionInfoRequest
    //routable_message.setSessionInfo


    var byteArray = routable_message.serializeBinary();
    return fetch(`https://fleet-api.prd.${region}.vn.cloud.tesla.com/api/1/vehicles/{vehicle_tag}/signed_command`, {
        method: "POST",
        headers: { Authorization: `Bearer ${access_token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
            routable_message: Buffer.from(byteArray).toString('base64')
        })
    }).then(resp => {
        console.log(resp.status)
        return resp.text().then(text => {
            console.log(text)
        })
    })
}

exports.sendCommand = sendCommand

const access_token = ""
const vin = ""
sendCommand(access_token, vin, "HONK_HORN")