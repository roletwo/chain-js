import { invalid_map } from './message'

it('invalid_map', async () => {
  expect(invalid_map({ a: 11, b: 'bb' })).toBe('a=11, b="bb"')
})
