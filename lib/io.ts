import {Functor, Monad, MonadicFn, Map} from '../types';
import compose from '../helpers/util/compose';
import hold from '../helpers/util/hold';

let inc = 0;
let debug = true;

export default class IO implements Functor, Monad {
  effect: Function;
  id: number;
  name: string;

  static of(x: any){
    return new IO(hold(x));
  }

  static from(effect: Function, name?:string){
    return new IO(effect, name);
  }

  constructor(effect: Function, name?: string){
    this.effect = effect;
    if (debug){
      this.id = inc++;
      this.name = name || effect.name;
      console.log(`IO: ${this.id} created with name ${this.name}`);
    }
  }

  map(fn: Map){
    return new IO(compose(this.effect, fn));
  }

  flatMap(fn: MonadicFn) {
    const thisOperation = this.performUnsafeOperation.bind(this);
    const mappedOperation = (...args) => {
      const io = (<IO>fn.call(null, ...args));
      io.performUnsafeOperation.bind(io).call();
    };

    console.log(`Flat Maping ${this.id}`);
    
    return IO.from(compose(
      thisOperation,
      mappedOperation
    ), 'FlatMapped IOs');
  }

  // ***  Needs Implementation *** //
  flatten(){
    return this;
  }

  performUnsafeOperation(){
    console.log(`Calling Unsafe Operation on: ${this.id}.${this.name || ""}`);
    return this.effect();
  }
}
