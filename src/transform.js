/**
 * Deep object transformer.
 *
 * @param {*} o The object that the transformation function will be applied.
 * @param {*} t The test function for the property, takes key and value.
 * @param {*} f The transformation function to be applied.
 * @return {*} Transform applied object.
 */
const transform = function (o, t, f) {
  for (var k in o) {

    if (o[k] !== null && typeof o[k] === 'object') {
      o[k] = transform(o[k], t, f);
      continue;
    }

    if (typeof t === 'function' && !t.call(this, k, o[k])) continue;

    o[k] = f.apply(this, [k, o[k]]) || o[k];
  }
  return o;
};

module.exports = transform;
