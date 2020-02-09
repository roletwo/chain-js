import { EID_common } from '@mosteast/common_eid'
import { trim } from 'lodash'
import { E } from '@mosteast/e'
import { invalid_map } from './util/message'
import { T_object } from '../type'

export class Invalid_argument extends E {
  eid = EID_common.invalid_argument
  level = 'internal'

  constructor(message: string, solution: string)
  constructor(map: T_object, solution?: string)
  constructor(a, b?: any) {
    super()

    const ta = typeof a,
          tb = typeof b

    // Simple string error.
    if (ta === 'string' && tb === 'string') {
      this.message = a
      this.solution = b
    } else {
      let message = 'Invalid arguments: '
      message += invalid_map(a)
      this.message = trim(message, ', ')
      this.solution = b
    }
  }
}
