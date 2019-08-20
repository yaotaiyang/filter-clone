"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterClone = filterClone;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function filterClone(obj, include, exclude) {
  var res;

  if (_typeof(obj) == 'object') {
    if (getType(obj) === 'array') {
      res = [];

      for (var i = 0, len = obj.length; i < len; i++) {
        res.push(filterClone(obj[i], include, exclude));
      }
    } else {
      res = {};

      for (var j in obj) {
        if (include && getType(include) === 'array' && include.length) {
          if (include.indexOf(j) != -1) {
            res[j] = filterClone(obj[j], include, exclude);
          }
        } else if (include && getType(include) === 'regexp') {
          if (include.test(j)) {
            res[j] = filterClone(obj[j], include, exclude);
          }
        } else if (exclude && getType(exclude) === 'array' && exclude.length) {
          if (exclude.indexOf(j) === -1) {
            res[j] = filterClone(obj[j], include, exclude);
          }
        } else if (exclude && getType(exclude) === 'regexp') {
          if (!exclude.test(j)) {
            res[j] = filterClone(obj[j], include, exclude);
          }
        } else {
          res[j] = filterClone(obj[j], include, exclude);
        }
      }
    }
  } else {
    res = obj;
  }

  return res;

  function getType(value) {
    var str = _typeof(value);

    if (str === 'object') {
      return value === null ? null : Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
    }

    return str;
  }
}
//# sourceMappingURL=index.js.map