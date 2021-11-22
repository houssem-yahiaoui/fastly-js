"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RelationshipWafFirewallVersions = _interopRequireDefault(require("./RelationshipWafFirewallVersions"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _TypeWafFirewall = _interopRequireDefault(require("./TypeWafFirewall"));

var _WafFirewallData = _interopRequireDefault(require("./WafFirewallData"));

var _WafFirewallResponseDataAllOf = _interopRequireDefault(require("./WafFirewallResponseDataAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafFirewallResponseData model module.
 * @module model/WafFirewallResponseData
 * @version 3.0.0-alpha1
 */
var WafFirewallResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafFirewallResponseData</code>.
   * @alias module:model/WafFirewallResponseData
   * @implements module:model/WafFirewallData
   * @implements module:model/WafFirewallResponseDataAllOf
   */
  function WafFirewallResponseData() {
    _classCallCheck(this, WafFirewallResponseData);

    _WafFirewallData["default"].initialize(this);

    _WafFirewallResponseDataAllOf["default"].initialize(this);

    WafFirewallResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafFirewallResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafFirewallResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallResponseData} obj Optional instance to populate.
     * @return {module:model/WafFirewallResponseData} The populated <code>WafFirewallResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafFirewallResponseData();

        _WafFirewallData["default"].constructFromObject(data, obj);

        _WafFirewallResponseDataAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafFirewall["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], _Timestamps["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipWafFirewallVersions["default"].constructFromObject(data['relationships']);
        }
      }

      return obj;
    }
  }]);

  return WafFirewallResponseData;
}();
/**
 * @member {module:model/TypeWafFirewall} type
 */


WafFirewallResponseData.prototype['type'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

WafFirewallResponseData.prototype['attributes'] = undefined;
/**
 * Alphanumeric string identifying a WAF Firewall.
 * @member {String} id
 */

WafFirewallResponseData.prototype['id'] = undefined;
/**
 * @member {module:model/RelationshipWafFirewallVersions} relationships
 */

WafFirewallResponseData.prototype['relationships'] = undefined; // Implement WafFirewallData interface:

/**
 * @member {module:model/TypeWafFirewall} type
 */

_WafFirewallData["default"].prototype['type'] = undefined;
/**
 * @member {module:model/WafFirewallDataAttributes} attributes
 */

_WafFirewallData["default"].prototype['attributes'] = undefined; // Implement WafFirewallResponseDataAllOf interface:

/**
 * Alphanumeric string identifying a WAF Firewall.
 * @member {String} id
 */

_WafFirewallResponseDataAllOf["default"].prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

_WafFirewallResponseDataAllOf["default"].prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipWafFirewallVersions} relationships
 */

_WafFirewallResponseDataAllOf["default"].prototype['relationships'] = undefined;
var _default = WafFirewallResponseData;
exports["default"] = _default;