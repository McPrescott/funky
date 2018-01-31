import {Map} from '../index';

export interface Functor {
  map(fn: Map): Functor;
}
