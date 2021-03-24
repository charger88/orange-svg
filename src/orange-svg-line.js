const OrangeSVGAbstractElement = require('./orange-svg-abstract-element')

class OrangeSVGLine extends OrangeSVGAbstractElement {

  /**
   *
   * @param {number} start_x
   * @param {number} start_y
   * @param {number} end_x
   * @param {number} end_y
   * @param {?string} color
   * @param {?number} thickness
   */
  constructor (start_x, start_y, end_x, end_y, color = null, thickness = null) {
    super()
    this._start_x = start_x
    this._start_y = start_y
    this._end_x = end_x
    this._end_y = end_y
    this._color = color
    this._thickness = thickness
  }

  /**
   * Name of the tag
   *
   * @type string
   * @static
   * @abstract
   */
  static get tag () {
    return 'line'
  }

  /**
   * Prepare render data
   *
   * @private
   */
  _do_render () {
    const args = {
      'x1': this._start_x,
      'y1': this._start_y,
      'x2': this._end_x,
      'y2': this._end_y,
      'stroke': this._color === null ? '#000000' : this._color
    }
    if (this._thickness !== null) {
      args['stroke-width'] = this._thickness
    }
    return {args}
  }

}

module.exports = OrangeSVGLine
