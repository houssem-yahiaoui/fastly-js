"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _TlsPrivateKeyResponseData = _interopRequireDefault(require("./TlsPrivateKeyResponseData"));

var _TlsPrivateKeysResponseAllOf = _interopRequireDefault(require("./TlsPrivateKeysResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsPrivateKeysResponse model module.
 * @module model/TlsPrivateKeysResponse
 * @version 3.0.0-alpha1
 */
var TlsPrivateKeysResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsPrivateKeysResponse</code>.
   * @alias module:model/TlsPrivateKeysResponse
   * @implements module:model/Pagination
   * @implements module:model/TlsPrivateKeysResponseAllOf
   */
  function TlsPrivateKeysResponse() {
    _classCallCheck(this, TlsPrivateKeysResponse);

    _Pagination["default"].initialize(this);

    _TlsPrivateKeysResponseAllOf["default"].initialize(this);

    TlsPrivateKeysResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsPrivateKeysResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsPrivateKeysResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsPrivateKeysResponse} obj Optional instance to populate.
     * @return {module:model/TlsPrivateKeysResponse} The populated <code>TlsPrivateKeysResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsPrivateKeysResponse();

        _Pagination["default"].constructFromObject(data, obj);

        _TlsPrivateKeysResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_TlsPrivateKeyResponseData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TlsPrivateKeysResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


TlsPrivateKeysResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

TlsPrivateKeysResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/TlsPrivateKeyResponseData>} data
 */

TlsPrivateKeysResponse.prototype['data'] = undefined; // Implement Pagination interface:

/**
 * @member {module:model/PaginationLinks} links
 */

_Pagination["default"].prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

_Pagination["default"].prototype['meta'] = undefined; // Implement TlsPrivateKeysResponseAllOf interface:

/**
 * @member {Array.<module:model/TlsPrivateKeyResponseData>} data
 */

_TlsPrivateKeysResponseAllOf["default"].prototype['data'] = undefined;
var _default = TlsPrivateKeysResponse;
exports["default"] = _default;