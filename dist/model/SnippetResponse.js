"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Snippet = _interopRequireDefault(require("./Snippet"));

var _SnippetResponseAllOf = _interopRequireDefault(require("./SnippetResponseAllOf"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SnippetResponse model module.
 * @module model/SnippetResponse
 * @version 3.0.0-alpha1
 */
var SnippetResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SnippetResponse</code>.
   * @alias module:model/SnippetResponse
   */
  function SnippetResponse() {
    _classCallCheck(this, SnippetResponse);

    SnippetResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SnippetResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SnippetResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetResponse} obj Optional instance to populate.
     * @return {module:model/SnippetResponse} The populated <code>SnippetResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SnippetResponse();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('dynamic')) {
          obj['dynamic'] = _ApiClient["default"].convertToType(data['dynamic'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('priority')) {
          obj['priority'] = _ApiClient["default"].convertToType(data['priority'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SnippetResponse;
}();
/**
 * The VCL code that specifies exactly what the snippet does.
 * @member {String} content
 */


SnippetResponse.prototype['content'] = undefined;
/**
 * Sets the snippet version.
 * @member {module:model/SnippetResponse.DynamicEnum} dynamic
 */

SnippetResponse.prototype['dynamic'] = undefined;
/**
 * The name for the snippet.
 * @member {String} name
 */

SnippetResponse.prototype['name'] = undefined;
/**
 * Numeric string value. Priority determines execution order. Lower numbers execute first.
 * @member {String} priority
 * @default '100'
 */

SnippetResponse.prototype['priority'] = '100';
/**
 * The location in generated VCL where the snippet should be placed.
 * @member {module:model/SnippetResponse.TypeEnum} type
 */

SnippetResponse.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

SnippetResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

SnippetResponse.prototype['version'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

SnippetResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

SnippetResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

SnippetResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying a VCL Snippet.
 * @member {String} id
 */

SnippetResponse.prototype['id'] = undefined;
/**
 * Allowed values for the <code>dynamic</code> property.
 * @enum {String}
 * @readonly
 */

SnippetResponse['DynamicEnum'] = {
  /**
   * value: "0"
   * @const
   */
  "0": "0",

  /**
   * value: "1"
   * @const
   */
  "1": "1"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

SnippetResponse['TypeEnum'] = {
  /**
   * value: "init"
   * @const
   */
  "init": "init",

  /**
   * value: "recv"
   * @const
   */
  "recv": "recv",

  /**
   * value: "hash"
   * @const
   */
  "hash": "hash",

  /**
   * value: "hit"
   * @const
   */
  "hit": "hit",

  /**
   * value: "miss"
   * @const
   */
  "miss": "miss",

  /**
   * value: "pass"
   * @const
   */
  "pass": "pass",

  /**
   * value: "fetch"
   * @const
   */
  "fetch": "fetch",

  /**
   * value: "error"
   * @const
   */
  "error": "error",

  /**
   * value: "deliver"
   * @const
   */
  "deliver": "deliver",

  /**
   * value: "log"
   * @const
   */
  "log": "log",

  /**
   * value: "none"
   * @const
   */
  "none": "none"
};
var _default = SnippetResponse;
exports["default"] = _default;