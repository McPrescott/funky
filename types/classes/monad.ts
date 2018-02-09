import {Functor, MonadicFn} from '../index';

export interface Monad extends Functor {
  flatten?(): Monad
  flatMap(fn: MonadicFn): Monad
}