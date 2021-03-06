'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('./templates/template');

var _template2 = _interopRequireDefault(_template);

var _text = require('./templates/text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Representation of a message to a user. Contains a pronounceable fallback message and optional rich template responses.
 * @property {string} fallback - Pronounceable and represents the responses as a whole
 * @property {Template[]} responses - List of rich template responses
 * @example
 * // Create a message without responses
 * // this will create a response
 * // when converted to JSON
 * const message = new Message('Hi there')
 **/
var Message = function () {

  /**
   * @param {string} fallback - Required
   **/
  function Message(fallback) {
    _classCallCheck(this, Message);

    if (typeof fallback !== 'string' || fallback.length === 0) {
      throw new Error('fallback is mandatory and must be a string');
    }
    this.fallback = fallback;
  }

  /**
   * Add a response
   * @param {Template} - response
   * @param {Number} delay - Optional delay in miliseconds for sending the response
   * @return {Message}
   **/


  _createClass(Message, [{
    key: 'addResponse',
    value: function addResponse(response, delay) {
      if (!(response instanceof _template2.default)) {
        throw new Error('addResponse argument must be an instance of a Template');
      }

      if (typeof d === 'number') {
        response.delay = delay;
      }

      if (!this.responses) {
        this.responses = [];
      }

      this.responses.push(response);

      return this;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var fallback = this.fallback,
          responses = this.responses;


      if (!Array.isArray(responses) || !responses.length) {
        return {
          fallback: fallback,
          responses: [new _text2.default(fallback)]
        };
      }

      return {
        fallback: fallback,
        responses: responses
      };
    }
  }]);

  return Message;
}();

exports.default = Message;