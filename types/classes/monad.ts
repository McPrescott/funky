import {Functor, MonadicFn} from '../index';

export interface Monad extends Functor {
  flatten?(): Monad
  flatmap(fn: MonadicFn): Monad
}