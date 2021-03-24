const OrangeSVGAbstractElement = require('./orange-svg-abstract-element')

class OrangeSVGCircle extends OrangeSVGAbstractElement {

  /**
   *
   * @param {number} center_x
   * @param {number} center_y
   * @param {number} radius
   * @param {?string} color
   */
  constructor (center_x, center_y, radius, color = null) {
    super()
    this._center_x = center_x
    this._center_y = center_y
    this._radius = radius
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
    return 'circle'
  }

  /**
   * Prepare render data
   *
   * @private
   */
  _do_render () {
    const args = {
      'r': this._radius,
      'cx': this._center_x,
      'cy': this._center_y
    }
    if (this._color) {
      args['fill'] = this._color
    }
    return {args}
  }

}

module.exports = OrangeSVGCircle
