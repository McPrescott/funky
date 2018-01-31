import {Functor, Monad, MonadicFn, Map} from './types/index';
import {compose, hold} from './precept/lib/util';

export class IO implements Functor, Monad {
  effect: Function;

  static of(x: any){
    return new IO(hold(x));
  }

  static from(effect: Function){
    return new IO(effect);
  }

  constructor(effect: Function){
    this.effect = effect;
  }

  map(fn: Map){
    return new IO(compose(this.effect, fn));
  }

  flatMap(fn: MonadicFn){
    return IO.from(compose(this.performUnsafeOperation, fn));
  }

  // ***  Needs Implementation *** //
  flatten(){
    return this;
  }

  performUnsafeOperation(){
    return this.effect();
  }
}