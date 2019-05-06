import {
  isString,
  isFunction,
  isElement,
  isObject,
  isArrayLike,
} from './utils/is';

/**
 * Adds an event listener to a HTML element
 *
 * @param  {String}      method
 * @param  {HTMLElement} node
 * @param  {String}      type
 * @param  {Function}    handler
 * @param  {Object}      options
 * @return {Object}
 */
function listenNode(method, node, type, handler, options) {
  node[method](type, handler, options);
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param  {String}                  method
 * @param  {NodeList|HTMLCollection} nodes
 * @param  {String}                  type
 * @param  {Function}                handler
 * @return {Object}
 */
function listenNodeList(method, nodes, type, handler, options) {
  Array.from(nodes).forEach(node => {
    listenNode(method, node, type, handler, options);
  });
}

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String}   method
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String}   type
 * @param {Function} handler
 * @param {Object}   options
 * @return {Object}
 */
function event(method, target, type, handler, options) {
  if (!target && !type && !handler) {
    throw new Error('Missing required arguments');
  }

  if (!isString(type)) {
    throw new TypeError('Second argument must be a String');
  }

  if (!isFunction(handler) && !isObject(handler)) {
    throw new TypeError('Third argument must be a Function');
  }

  if (isArrayLike(target) && isElement(target[0])) {
    return listenNodeList(method, target, type, handler, options);
  }

  if (isElement(target) || isObject(target)) {
    return listenNode(method, target, type, handler, options);
  }

  if (isString(target)) {
    const nodes = document.querySelectorAll(target);
    return listenNodeList(method, nodes, type, handler, options);
  }

  throw new TypeError(
    'First argument must be a String, HTMLElement, HTMLCollection, or NodeList'
  );
}

/**
 * Add en event listener
 *
 * @param  {String|HTMLElement|HTMLCollection|NodeList} target
 * @param  {String}   type
 * @param  {Function} handler
 * @param  {Object}   options
 * @return {void}
 */
export function on(
  target,
  type,
  handler,
  options = { capture: false, passive: true }
) {
  event('addEventListener', target, type, handler, options);
}

/**
 * Remove an event listener
 * @param  {String|HTMLElement|HTMLCollection|NodeList} target
 * @param  {String} type
 * @param  {Function} handler
 * @return {void}
 */
export function off(target, type, handler) {
  event('removeEventListener', target, type, handler);
}

/**
 * Add an event listener which
 * will be triggered only once
 * @param  {String|HTMLElement|HTMLCollection|NodeList} target
 * @param  {String}   type
 * @param  {Function} handler
 * @param  {Object}   options
 * @return {void}
 */
export function once(
  target,
  type,
  handler,
  options = { capture: false, passive: true }
) {
  const detach = () => {
    off(target, type, handler);
    off(target, type, detach);
  };

  on(target, type, handler, options);
  on(target, type, detach, options);
}
