import { EID_common } from '@mosteast/common_eid';
import { E } from '@mosteast/e';
import { trim } from 'lodash';
import { E_level } from '../type';
import { invalid_map } from './util/message';

export class Invalid_argument extends E {
  eid = EID_common.invalid_argument;
  data?: T_invalid_argument_data;

  constructor(message: string, solution?: string)
  constructor(map: T_invalid_argument_map, solution?: string)
  constructor(a: any, b?: any) {
    super();

    const ta = typeof a,
          tb = typeof b;

    // Simple string error.
    if (ta === 'string') {
      this.message = a;
      this.solution = b;
    } else if (typeof a === 'object' && ( ! b || typeof b === 'string')) {
      let message = 'Invalid arguments: ';
      message += invalid_map(a);
      this.message = trim(message, ', ');
      this.solution = b;
    } else { // Object error with more info.
      let keys: string[]             = [],
          reasons: T_invalid_reasons = {};

      if (typeof a === 'string') {
        keys.push(a);
        reasons[a] = b;
        reasons[a].key = a;
      } else {
        throw new Error(`Invalid argument ${JSON.stringify(arguments)} for Error ${this.eid}`);
      }

      this.message = `Invalid arguments: {${keys.join(', ')}}.`;
      this.solution = 'Checkout {data.invalid_reasons} and try again.';
      this.data = {
        invalid_keys: keys,
        invalid_reasons: reasons,
      };
    }

    if (this.solution) {
      this.message += ` (Solution: ${this.solution})`;
    }
  }
}

/**
 * Api error shortcut
 */
export class Invalid_argument_external extends Invalid_argument {
  level = E_level.external;
  status_code = 403;
}

export interface T_invalid_reasons {
  [key: string]: T_invalid_reason
}

export interface T_invalid_reason {
  constraints: any
  key?: string
  value?: any
}

export interface T_invalid_argument_data {
  invalid_reasons: T_invalid_reasons
  invalid_keys?: string[]
}

export type T_invalid_argument_map = {
  [argument_name: string]: any
}
