import {Monad} from '../index';

export interface MonadicFn {
  (a: any): Monad
}