/**
 * the
 *
 * Description. (use period)
 *
 * @since      x.x.x
 * @deprecated x.x.x Use new_function_name() instead.
 * @access     private
 *
 * @class
 * @augments parent
 * @mixes    mixin
 *
 * @alias    realName
 * @memberof namespace
 *
 * @see  Function/class relied on
 * @link URL
 * @global
 *
 * @fires   eventName
 * @fires   className#eventName
 * @listens event:eventName
 * @listens className~event:eventName
 *
 * @param {type}   var           Description.
 * @param {type}   [var]         Description of optional variable.
 * @param {type}   [var=default] Description of optional variable with default variable.
 * @param {Object} objectVar     Description.
 * @param {type}   objectVar.key Description of a key in the objectVar parameter.
 *
 * @yield {type} Yielded value description.
 *
 * @return {type} Return value description.
 */
module.exports = class BaseComponent {
  constructor(dataset) {
    this.dataset = dataset

    for (let func of Object.getOwnPropertyNames(this).concat(Object.getOwnPropertyNames(this.__proto__))) {
      if (func === 'dataset') continue
      if (func === 'constructor') continue
      this.exports = [this[func]]
    }
  }

  set exports(exports) {
    for (let item of exports) {
      if (this.dataset.exports[item.name]) {
        throw new Error(`${item.name} is already a exported dataset function!`)
      }
      this.dataset.exports[item.name] = item
    }
  }
}
