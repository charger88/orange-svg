const {
  OrangeSVG,
  OrangeSVGCircle,
  OrangeSVGText
} = require('./../index')

test('svg with 2 elements', () => {
  const svg = new OrangeSVG(10, 6)
  svg.appendChild(new OrangeSVGCircle(3, 3, 2))
  svg.appendChild(new OrangeSVGText("Test", 5.5, 3))
  expect(svg.toString()).toBe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" width="10" height="6">\n\t<circle r="2" cx="3" cy="3"></circle>\n\t<text x="5.5" y="3" text-anchor="middle">Test</text>\n</svg>')
})

test('svg with 2 elements negative view box', () => {
  const svg = new OrangeSVG(10, 6, -5, -3)
  svg.appendChild(new OrangeSVGCircle(0, 0, 2))
  svg.appendChild(new OrangeSVGText("Test", 2.5, 0))
  expect(svg.toString()).toBe('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -3 10 6" width="10" height="6">\n\t<circle r="2" cx="0" cy="0"></circle>\n\t<text x="2.5" y="0" text-anchor="middle">Test</text>\n</svg>')
})
