/**
 * Array.isArray()
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 * Array.isArray() のサポート
 */

if (!Array.isArray) {
  Array.isArray = function(vArg) {
    return Object.prototype.toString.call(vArg) === "[object Array]";
  };
}
