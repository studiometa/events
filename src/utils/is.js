/**
 * Test if a value is null
 *
 * @param  {Mixed}   value The value to test
 * @return {Boolean}       The result of the test
 */
export function isNull(value) {
  return value === null;
}

/**
 * Test if a value is a string
 *
 * @param  {Mixed}   value The value to test
 * @return {Boolean}       The result of the test
 */
export function isString(value) {
  return typeof value === 'string';
}

/**
 * Test if a value is a length
 *
 * @param  {Mixed}  value  The value to test
 * @return {Boolean}       The result of the test
 */
export function isLength(value) {
  return typeof value === 'number' && value > -1 && value % 1 === 0;
}

/**
 * Test if a value is a function
 *
 * @param  {Mixed}  value  The value to test
 * @return {Boolean}       The result of the test
 */
export function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Test if a value is an element
 *
 * @param  {Mixed}  value  The value to test
 * @return {Boolean}       The result of the test
 */
export function isElement(value) {
  return !isNull(value) && typeof value === 'object' && value.nodeType === 1;
}

/**
 * Test if a value is an object
 *
 * @param  {Mixed}  value  The value to test
 * @return {Boolean}       The result of the test
 */
export function isObject(value) {
  const type = typeof value;
  return !isNull(value) && (type === 'object' || type === 'function');
}

/**
 * Test if a value is like an array
 *
 * @param  {Mixed}  value  The value to test
 * @return {Boolean}       The result of the test
 */
export function isArrayLike(value) {
  return !isNull(value) && isLength(value) && !isFunction(value);
}
