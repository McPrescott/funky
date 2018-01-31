import {Functor} from '../index';

export interface Applicative extends Functor {
  apply(F: Functor): Functor
}