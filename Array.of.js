/**
 * Array.of()
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 * Array.of() のサポート
 */

if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
