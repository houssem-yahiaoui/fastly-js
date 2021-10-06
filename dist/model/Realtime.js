"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RealtimeEntry = _interopRequireDefault(require("./RealtimeEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Realtime model module.
 * @module model/Realtime
 * @version 3.0.0-alpha1
 */
var Realtime = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Realtime</code>.
   * @alias module:model/Realtime
   */
  function Realtime() {
    _classCallCheck(this, Realtime);

    Realtime.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Realtime, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Realtime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Realtime} obj Optional instance to populate.
     * @return {module:model/Realtime} The populated <code>Realtime</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Realtime();

        if (data.hasOwnProperty('AggregateDelay')) {
          obj['AggregateDelay'] = _ApiClient["default"].convertToType(data['AggregateDelay'], 'Number');
        }

        if (data.hasOwnProperty('Data')) {
          obj['Data'] = _ApiClient["default"].convertToType(data['Data'], [_RealtimeEntry["default"]]);
        }

        if (data.hasOwnProperty('Timestamp')) {
          obj['Timestamp'] = _ApiClient["default"].convertToType(data['Timestamp'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Realtime;
}();
/**
 * How long the system will wait before aggregating messages for each second. The most recent data returned will have happened at the moment of the request, minus the aggregation delay.
 * @member {Number} AggregateDelay
 */


Realtime.prototype['AggregateDelay'] = undefined;
/**
 * A list of [records](#record-data-model), each representing one second of time.
 * @member {Array.<module:model/RealtimeEntry>} Data
 */

Realtime.prototype['Data'] = undefined;
/**
 * Unix epoch timestamp.
 * @member {Number} Timestamp
 */

Realtime.prototype['Timestamp'] = undefined;
var _default = Realtime;
exports["default"] = _default;