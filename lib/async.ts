/**
 * Node-Style asynchronus task functor.
 */

import {Functor, Map, NodeAsync, NodeCallback} from '../types';
import compose from '../helpers/util/compose';
import defer from '../helpers/util/defer';

export default class Async implements Functor {
  private operation: NodeAsync;
  public __value: any;

  constructor(op: NodeAsync){
    this.operation = op;
  }

  static of(x: any){
    return new Async(defer(undefined, x));
  }

  static from(op: NodeAsync){
    return new Async(op);
  }

  map(map: Map){
    return new Async((callback: NodeCallback) => 
      this.operation((err, data) => callback(err, map(data))));
  }

  polyMap(...fns: Map[]){
    return this.map(compose(...fns));
  }
  
  deathOp(){
    this.operation((err, data) => {
      if(err) throw err;
    });
  }
}

