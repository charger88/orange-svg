/**
 * Abstract SVG Element
 */
class OrangeSVGAbstractElement {

  /**
   * Prepare render data
   *
   * @abstract
   * @private
   */
  _do_render () {
    throw new Error('OrangeSVGAbstractElement._do_render should be overridden')
  }

  /**
   * Name of the tag
   *
   * @type string
   * @static
   * @abstract
   */
  static get tag () {
    throw new Error('OrangeSVGAbstractElement.tag should be overridden')
  }

  /**
   * HTML attributes
   *
   * @type {Object}
   */
  get args () {
    return this._args || {}
  }

  /**
   * HTML attributes
   *
   * @type {Object}
   */
  set args (value) {
    this._args = value
  }

  /**
   * SVG Element converted to HTML string
   *
   * @return {string}
   */
  toString () {
    const render_data = this._do_render();
    let el_string = `<${this.constructor.tag}`
    for (const [name, value] of Object.entries(render_data.hasOwnProperty('args') ? Object.assign(render_data.args, this.args) : this.args)) {
      el_string += ` ${name}="${value}"`
    }
    el_string += `>`
    if (render_data.hasOwnProperty('value')) {
      el_string += render_data.value
    }
    el_string += `</${this.constructor.tag}>`
    return el_string
  }

  /**
   * SVG Element converted to HTML string
   *
   * @param {string} namespace
   * @param {object} callbacks Javascript callbacks for the element (works only for DOM)
   * @param {?object} callback_data Data for callback
   * @return {SVGAElement | SVGCircleElement | SVGClipPathElement | SVGComponentTransferFunctionElement | SVGDefsElement | SVGDescElement | SVGEllipseElement | SVGFEBlendElement | SVGFEColorMatrixElement | SVGFEComponentTransferElement | SVGFECompositeElement | SVGFEConvolveMatrixElement | SVGFEDiffuseLightingElement | SVGFEDisplacementMapElement | SVGFEDistantLightElement | SVGFEFloodElement | SVGFEFuncAElement | SVGFEFuncBElement | SVGFEFuncGElement | SVGFEFuncRElement | SVGFEGaussianBlurElement | SVGFEImageElement | SVGFEMergeElement | SVGFEMergeNodeElement | SVGFEMorphologyElement | SVGFEOffsetElement | SVGFEPointLightElement | SVGFESpecularLightingElement | SVGFESpotLightElement | SVGFETileElement | SVGFETurbulenceElement | SVGFilterElement | SVGForeignObjectElement | SVGGElement | SVGImageElement | SVGGradientElement | SVGLineElement | SVGLinearGradientElement | SVGMarkerElement | SVGMaskElement | SVGPathElement | SVGMetadataElement | SVGPatternElement | SVGPolygonElement | SVGPolylineElement | SVGRadialGradientElement | SVGRectElement | SVGScriptElement | SVGStopElement | SVGStyleElement | SVGSwitchElement | SVGSymbolElement | SVGTSpanElement | SVGTextContentElement | SVGTextElement | SVGTextPathElement | SVGTextPositioningElement | SVGTitleElement | SVGUseElement | SVGViewElement | SVGElement}
   */
  createDOMElement (namespace, callbacks = {}, callback_data = null) {
    const render_data = this._do_render();
    const el = document.createElementNS(namespace, this.constructor.tag)
    for (const [name, value] of Object.entries(render_data.hasOwnProperty('args') ? Object.assign(render_data.args, this.args) : this.args)) {
      el.setAttribute(name, value.toString())
    }
    if (render_data.hasOwnProperty('value')) {
      el.innerHTML = render_data.value
    }
    for (const [event, callback] of Object.entries(callbacks).filter(v => !!v[1])) {
      el.addEventListener(event, e => {
        callback(e, callback_data)
      })
    }
    return el
  }

}

module.exports = OrangeSVGAbstractElement
