/**
 * Deep object transformer.
 *
 * @param {*} o The object that the transformation function will be applied.
 * @param {*} t The transformation function to be applied.
 * @return {*} Transform applied object.
 */
const transform = function (o, t) {
  for (var k in o) {
    if (o[k] !== null && typeof o[k] === 'object') {
      o[k] = transform(o[k], t);
      continue;
    }
    o[k] = t.apply(this, [k, o[k]]) || o[k];
  }
  return o;
};

module.exports = transform;
