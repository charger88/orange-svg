const OrangeSVGAbstractElement = require('./orange-svg-abstract-element')

class OrangeSVGText extends OrangeSVGAbstractElement {

  /**
   *
   * @param {string} text
   * @param {number} x X coordinate of the anchor
   * @param {number} y Y coordinate of the anchor
   * @param {string} position Anchor position (start, middle, end)
   */
  constructor (text, x, y, position = 'middle') {
    super()
    this._text = text
    this._x = x
    this._y = y
    this._position = position
  }

  /**
   * Name of the tag
   *
   * @type string
   * @static
   * @abstract
   */
  static get tag () {
    return 'text'
  }

  /**
   * Prepare render data
   *
   * @private
   */
  _do_render () {
    const args = {
      'x': this._x,
      'y': this._y,
      'text-anchor': this._position
    }
    return {args, 'value': this._text}
  }

}

module.exports = OrangeSVGText
