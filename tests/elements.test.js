const {
  OrangeSVGCircle,
  OrangeSVGLine,
  OrangeSVGPath,
  OrangeSVGPolygon,
  OrangeSVGPolyline,
  OrangeSVGRect,
  OrangeSVGText
} = require('./../index')

test('circle', () => {
  const element = new OrangeSVGCircle(3, 3, 2)
  expect(element.toString()).toBe('<circle r="2" cx="3" cy="3"></circle>')
})

test('line', () => {
  const element = new OrangeSVGLine(1,2,3,4)
  expect(element.toString()).toBe('<line x1="1" y1="2" x2="3" y2="4" stroke="#000000"></line>')
})

test('path', () => {
  const element = new OrangeSVGPath("M10 0 L10 10 L0 10 L10 0 Z")
  expect(element.toString()).toBe('<path d="M10 0 L10 10 L0 10 L10 0 Z"></path>')
})

test('polygon', () => {
  const element = new OrangeSVGPolygon([[10,10], [20,20], [10,20]])
  expect(element.toString()).toBe('<polygon points="10,10 20,20 10,20"></polygon>')
})

test('polyline', () => {
  const element = new OrangeSVGPolyline([[10,10], [20,20], [10,20]])
  expect(element.toString()).toBe('<polyline points="10,10 20,20 10,20" fill="transparent" stroke="#000000"></polyline>')
})

test('rect', () => {
  const element = new OrangeSVGRect(10, 20, 30, 40)
  expect(element.toString()).toBe('<rect x="10" y="20" width="30" height="40"></rect>')
})

test('text', () => {
  const element = new OrangeSVGText("Test", 10, 20)
  expect(element.toString()).toBe('<text x="10" y="20" text-anchor="middle">Test</text>')
})
