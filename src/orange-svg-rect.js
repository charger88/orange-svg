const OrangeSVGAbstractElement = require('./orange-svg-abstract-element')

class OrangeSVGRect extends OrangeSVGAbstractElement {

  /**
   *
   * @param {number} top_left_x X coordinate of the top left corner
   * @param {number} top_left_y Y coordinate of the top left corner
   * @param {number} width Rectangle width
   * @param {number} height Rectangle height
   * @param {?string} color Rectangle background color
   */
  constructor (top_left_x, top_left_y, width, height, color = null) {
    super()
    this._top_left_x = top_left_x
    this._top_left_y = top_left_y
    this._width = width
    this._height = height
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
    return 'rect'
  }

  /**
   * Prepare render data
   *
   * @private
   */
  _do_render () {
    const args = {
      'x': this._top_left_x,
      'y': this._top_left_y,
      'width': this._width,
      'height': this._height
    }
    if (this._color !== null) {
      args['fill'] = this._color
    }
    return {args}
  }

}

module.exports = OrangeSVGRect
