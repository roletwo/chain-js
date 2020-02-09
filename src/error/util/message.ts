import { trim } from 'lodash'
import { T_object } from '../../type'

/**
 * Serialize invalid map
 *
 * From:
 * { name: 'wrong_name', age: 'wrong_age' }
 * to:
 * "name='wrong_name', age='wrong_age'"
 *
 * @param map
 */
export function invalid_map(map: T_object): string {
  let partial = ''

  for (let key in map) {
    partial += `${key}=${JSON.stringify(map[key])}, `
  }

  return trim(partial, ', ')
}
