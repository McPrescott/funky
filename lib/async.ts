/**
 * Node-Style asynchronus task functor.
 */

import {Functor, Map, NodeAsync, NodeCallback} from './types/index';
import compose from './helpers/compose';
import defer from './helpers/defer';

export class Async implements Functor {
  private operation: NodeAsync;
  public __value: any;

  constructor(op: NodeAsync){
    this.operation = op;
  }

  static of(x: any){
    return new Async(defer(undefined, x));
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

