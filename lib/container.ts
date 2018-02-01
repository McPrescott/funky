import {Functor, Monad, Applicative, MonadicFn, Map} from '../types';
import compose from '../helpers/util/compose';

export default class Container implements Functor, Monad, Applicative {
  private __value: any;

  constructor(x: any){
    this.__value = x;
  }

  static of(x: any){
    return (new Container(x));
  }

  map(fn: Map){
    return Container.of(fn(this.__value));
  }

  polyMap(...fns: Map[]){
    return Container.of(compose(...fns)(this.__value))
  }

  flatMap(fn: MonadicFn){
    return fn(this.__value);
  }

  flatten(): Container {
    return (this.__value instanceof Container)? 
      this.__value.flatten():
      this;
  }

  apply(F: Functor) {
    return F.map(this.__value);
  }

  // -- To Be Removed ----------------------------------------------------------

  toConsole(){
    console.log(this.toString());
    return this;
  }

  toString(){
    return `Container(${this.__value})`;
  }
}

