const OrangeSVGAbstractElement = require('./orange-svg-abstract-element')

class OrangeSVGPath extends OrangeSVGAbstractElement {

  /**
   *
   * @param {string} d See docs: https://www.w3schools.com/graphics/svg_path.asp
   * @param {?string} color
   */
  constructor (d, color = null) {
    super()
    this._d = d
    this._color = color
  }

  /**
   * Name of the tag
   *
   * @type string
   * @static
   * @abstract
   */
  static get tag () {
    return 'path'
  }

  /**
   * Prepare render data
   *
   * @private
   */
  _do_render () {
    const args = {'d': this._d}
    if (this._color !== null) {
      args['fill'] = this._color
    }
    return {args}
  }

}

module.exports = OrangeSVGPath
