const OrangeSVGAbstractElement = require('./orange-svg-abstract-element')

class OrangeSVGPolygon extends OrangeSVGAbstractElement {

  /**
   *
   * @param {numeric[][]} coordinates Format example: "[[0,1], [1,1], [1,0], [0,0]]" (square)
   * @param {?string} color
   * @param {?opacity} opacity
   */
  constructor (coordinates, color = null, opacity = null) {
    super()
    this._coordinates = coordinates
    this._color = color
    this._opacity = opacity
  }

  /**
   * Name of the tag
   *
   * @type string
   * @static
   * @abstract
   */
  static get tag () {
    return 'polygon'
  }

  /**
   * Prepare render data
   *
   * @private
   */
  _do_render () {
    const args = {'points': this._coordinates.map(v => v.join(',')).join(' ')}
    if (this._color !== null) {
      args['fill'] = this._color
    }
    if (this._opacity !== null) {
      args['style'] = `opacity: ${this._opacity};`
    }
    return {args}
  }

}

module.exports = OrangeSVGPolygon
