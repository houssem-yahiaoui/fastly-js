"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsBulkCertificateResponseData = _interopRequireDefault(require("./TlsBulkCertificateResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsBulkCertificatesResponseAllOf model module.
 * @module model/TlsBulkCertificatesResponseAllOf
 * @version 3.0.0-alpha1
 */
var TlsBulkCertificatesResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsBulkCertificatesResponseAllOf</code>.
   * @alias module:model/TlsBulkCertificatesResponseAllOf
   */
  function TlsBulkCertificatesResponseAllOf() {
    _classCallCheck(this, TlsBulkCertificatesResponseAllOf);

    TlsBulkCertificatesResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsBulkCertificatesResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsBulkCertificatesResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsBulkCertificatesResponseAllOf} obj Optional instance to populate.
     * @return {module:model/TlsBulkCertificatesResponseAllOf} The populated <code>TlsBulkCertificatesResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsBulkCertificatesResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_TlsBulkCertificateResponseData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TlsBulkCertificatesResponseAllOf;
}();
/**
 * @member {Array.<module:model/TlsBulkCertificateResponseData>} data
 */


TlsBulkCertificatesResponseAllOf.prototype['data'] = undefined;
var _default = TlsBulkCertificatesResponseAllOf;
exports["default"] = _default;