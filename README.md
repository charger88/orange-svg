# Orange.SVG

Library for generating SVG as DOM elements or string.

This library has limited functionality (mostly because it was created to be used by another library which doesn't use all SVG elements), but you can extend it in your projects.

You can build this library for static front-end usage via command `npm run build` (you need to run `npm install` first). JavaScript file will appear in the `dist` directory.

## Classes

### OrangeSVG

Class represents SVG document.

| Element | Name | Type | Description |
|---|---|---|---|
| method | `constructor` |  | Creates SVG object |
| property | `w` | `number` | Width |
| property | `h` | `number` | Height |
| property | `x1` | `number` | X coordinate of top left corner |
| property | `y1` | `number` | Y coordinate of top left corner |
| method | `appendChild` | `OrangeSVG` | Adds element into SVG document |
| render | `render` | `SVGSVGElement` | Renders SVG in the container (can be defined by element's ID of DOM Element itself) |
| property | `element` | `SVGSVGElement` | SVG Object converted to HTML SVGSVGElement |
| property | `toString` | `string` | SVG Object converted to HTML string |

### OrangeSVGAbstractElement

This is parental class for all SVG Elements in this library. All classes below are extended from this class and have its methods.

| Element | Name | Type | Description |
|---|---|---|---|
| abstract property | `tag` | `string` | Tag name |
| property | `args` | `Object` | Custom HTML attributes |
| method | `toString` | `string` | SVG Element converted to HTML string |
| method | `createDOMElement` | `SVGElement`* | SVG Element converted to HTML string |

_* - can be any SVG-related class like `SVGCircleElement`, `SVGClipPathElement`, `SVGComponentTransferFunctionElement`, etc._

### Elements classes

Classes extending `OrangeSVGAbstractElement` have different constructors.

| Class | Constructor arguments |
|---|---|
| `OrangeSVGCircle` | `center_x`, `center_y`, `radius`, `color` (optional) |
| `OrangeSVGLine` | `start_x`, `start_y`, `end_x`, `end_y`, `color` (optional), `thickness` (optional) |
| `OrangeSVGPath` | `d`[*](https://www.w3schools.com/graphics/svg_path.asp), `color` (optional) |
| `OrangeSVGPolygon` | `coordinates`, `color` (optional), `opacity` (optional) |
| `OrangeSVGPolyline` | `coordinates`, `color` (optional), `thickness` (optional) |
| `OrangeSVGRect` | `top_left_x`, `top_left_y`, `width`, `height`, `color` (optional) |
| `OrangeSVGText` | `text`, `x`, `y`, `position` (optional) |

## Example

```html
<html>
<script src="./../dist/orange-svg.min.js"></script>
<body>
<div id="svg-container"></div>
<script>
  const svg = new OrangeSVG(1000, 600, -500, -300)
  svg.appendChild(new OrangeSVGCircle(0, 0, 200, 'orange'))
  svg.appendChild(new OrangeSVGText("Click me", 250, 0), {'click': (e,v) => alert('Library: ' + v.name)}, {"name": "Orange.IP"})
  svg.render('svg-container')
</script>
</body>
</html>
```

Element `svg-container` will have value:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-500 -300 1000 600" width="1000" height="600">
    <circle r="200" cx="0" cy="0" fill="orange"></circle>
    <text x="250" y="0" text-anchor="middle">Click me</text>
</svg>
```

Text element will have function `(e,v) => alert('Library: ' + v.name)` to be assigned to `click` event and object `{"name": "Orange.IP"}` to be passed there as the second argument.