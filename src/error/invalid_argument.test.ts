import { Invalid_argument } from './invalid_argument'

it('pass as map', async () => {
  const a = 1,
        b = 'B',
        c = { x: 1 }

  const e = new Invalid_argument({ a, b, c })

  expect(e.message).toContain('a=1, b="B", c={"x":1}')
})

it('pass as map', async () => {
  const e = new Invalid_argument('aaa')

  expect(e.message).toContain('aaa')
})

it('message and solution could be combined', async () => {
  const e = new Invalid_argument('a', 'b')
  expect(e.message).toBe('a (Solution: b)')
})
