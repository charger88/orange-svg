/**
 * Class represents SVG document
 */
class OrangeSVG {

  /**
   * Creates SVG object
   *
   * @param {number} width Width
   * @param {number} height Height
   * @param {number} x1 X coordinate of top left corner
   * @param {number} y1 Y coordinate of top left corner
   */
  constructor (width = 0, height = 0, x1 = 0, y1 = 0) {
    this.w = width
    this.h = height
    this.x1 = x1
    this.y1 = y1
    this._children = []
  }

  /**
   * Width
   *
   * @type {number}
   */
  get w () {
    if (this._width === 0) {
      throw new Error('SVG width should be defined')
    }
    return this._width
  }

  /**
   * Width
   *
   * @type {number}
   */
  set w (value) {
    this._width = value
  }

  /**
   * Height
   *
   * @type {number}
   */
  get h () {
    if (this._height === 0) {
      throw new Error('SVG height should be defined')
    }
    return this._height
  }

  /**
   * Height
   *
   * @type {number}
   */
  set h (value) {
    this._height = value
  }

  /**
   * X coordinate of top left corner
   *
   * @type {number}
   */
  set x1 (value) {
    this._x1 = value
  }

  /**
   * X coordinate of top left corner
   *
   * @type {number}
   */
  get x1 () {
    return this._x1
  }

  /**
   * Y coordinate of top left corner
   *
   * @type {number}
   */
  set y1 (value) {
    this._y1 = value
  }

  /**
   * Y coordinate of top left corner
   *
   * @type {number}
   */
  get y1 () {
    return this._y1
  }

  /**
   * Adds element into SVG document
   *
   * @param {OrangeSVGAbstractElement} element SVG Element
   * @param {object} callbacks Javascript callbacks for the element (works only for DOM)
   * @param {?object} callback_data Data for callback
   * @return {OrangeSVG}
   */
  appendChild (element, callbacks = {}, callback_data = null) {
    this._children.push({element, callbacks, callback_data})
    return this
  }

  /**
   * Renders SVG in the container
   *
   * @param {HTMLElement|string} container
   * @return {SVGSVGElement}
   */
  render (container) {
    let container_element
    if (typeof container === 'string') {
      container_element = document.getElementById(container)
      if (!container) {
        throw new Error(`Element "${container}" not found`)
      }
    } else {
      container_element = container
    }
    const element = this.element
    container_element.appendChild(element)
    return element
  }

  /**
   * SVG Object converted to SVGSVGElement
   *
   * @type {SVGSVGElement}
   */
  get element () {
    const svg = document.createElementNS(this.constructor._NS, 'svg')
    svg.setAttribute('xmlns', this.constructor._NS)
    svg.setAttribute('viewBox', this._viewBox)
    svg.setAttribute('width', this.w.toString())
    svg.setAttribute('height', this.h.toString())
    for (const c of this._children) {
      svg.appendChild(c.element.createDOMElement(svg.namespaceURI, c.callbacks, c.callback_data))
    }
    return svg
  }

  /**
   * SVG Object converted to HTML string
   *
   * @return {string}
   */
  toString () {
    return `<svg xmlns="${this.constructor._NS}" viewBox="${this._viewBox}" width="${this.w}" height="${this.h}">\n\t${this._children.map(c => c.element).join('\n\t')}\n</svg>`
  }

  /**
   * SVG namespace
   *
   * @type {string}
   * @static
   * @private
   */
  static get _NS () {
    return 'http://www.w3.org/2000/svg'
  }

  /**
   * SVG "viewBox" argument
   *
   * @type {string}
   * @private
   */
  get _viewBox () {
    return `${this.x1} ${this.y1} ${this.w} ${this.h}`
  }

}

module.exports = OrangeSVG
