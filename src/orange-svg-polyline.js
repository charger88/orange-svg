const OrangeSVGAbstractElement = require('./orange-svg-abstract-element')

class OrangeSVGPolyline extends OrangeSVGAbstractElement {

  /**
   *
   * @param {[number, number][]} coordinates Format example: "[[0,1], [1,1], [1,0], [0,0]]" (square)
   * @param {?string} color
   * @param {?opacity} thickness
   */
  constructor (coordinates, color = null, thickness = null) {
    super()
    this._coordinates = coordinates
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
    return 'polyline'
  }

  /**
   * Prepare render data
   *
   * @private
   */
  _do_render () {
    const args = {
      'points': this._coordinates.map(v => `${v[0]},${v[1]}`).join(' '),
      'fill': 'transparent',
      'stroke': this._color === null ? '#000000' : this._color
    }
    if (this._thickness !== null) {
      args['stroke-width'] = this._thickness
    }
    return {args}
  }

}

module.exports = OrangeSVGPolyline
