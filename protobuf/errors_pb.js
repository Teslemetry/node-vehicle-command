// source: errors.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Errors.GenericError_E', null, global);
goog.exportSymbol('proto.Errors.NominalError', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Errors.NominalError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Errors.NominalError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Errors.NominalError.displayName = 'proto.Errors.NominalError';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Errors.NominalError.prototype.toObject = function(opt_includeInstance) {
  return proto.Errors.NominalError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Errors.NominalError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Errors.NominalError.toObject = function(includeInstance, msg) {
  var f, obj = {
    genericerror: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Errors.NominalError}
 */
proto.Errors.NominalError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Errors.NominalError;
  return proto.Errors.NominalError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Errors.NominalError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Errors.NominalError}
 */
proto.Errors.NominalError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.Errors.GenericError_E} */ (reader.readEnum());
      msg.setGenericerror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Errors.NominalError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Errors.NominalError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Errors.NominalError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Errors.NominalError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGenericerror();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional GenericError_E genericError = 1;
 * @return {!proto.Errors.GenericError_E}
 */
proto.Errors.NominalError.prototype.getGenericerror = function() {
  return /** @type {!proto.Errors.GenericError_E} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.Errors.GenericError_E} value
 * @return {!proto.Errors.NominalError} returns this
 */
proto.Errors.NominalError.prototype.setGenericerror = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.Errors.GenericError_E = {
  GENERICERROR_NONE: 0,
  GENERICERROR_UNKNOWN: 1,
  GENERICERROR_CLOSURES_OPEN: 2,
  GENERICERROR_ALREADY_ON: 3,
  GENERICERROR_DISABLED_FOR_USER_COMMAND: 4,
  GENERICERROR_VEHICLE_NOT_IN_PARK: 5,
  GENERICERROR_UNAUTHORIZED: 6,
  GENERICERROR_NOT_ALLOWED_OVER_TRANSPORT: 7
};

goog.object.extend(exports, proto.Errors);