import {Functor, Map} from '../types';
import compose from '../helpers/util/compose';
import curry from '../helpers/util/curry';
import empty from '../helpers/util/empty';

interface Emitter {(callback: EventListener): void} 


export default class Torrent {
  private emitter: Function;

  static fromEvent(event: string, element: Window|Element|string) {
    return new Torrent((callback: EventListener) => {
      element = 
        (element instanceof HTMLElement)? element:
        (typeof element === 'string')?    document.querySelector(element):
        /* Otherwise */                   window;
      
        element.addEventListener(event, callback);
    }) 
  }

  static from(emitter: Emitter) {
    return new Torrent(emitter);
  }

  constructor(emitter: Emitter) {
    this.emitter = emitter
  }

  map(fn: Map) {
    return new Torrent((callback: Function) => 
      this.emitter(compose(fn, callback))
    );
  }

  polyMap(...fns: Map[]){
    return this.map(compose(...fns));
  }

  from(arg) {
    return new Torrent(callback => this.emitter(
      compose(
        input => (input)? arg: input, 
        callback
      )
    ));
  }

  // *** Impurity *** ----------------------------------------------------------

  // <> unleash :: @Torrent a -> ...Map? -> void
  //                                            
  unleash(...fns: Map[]): void {
    ((fns.length === 0)
      ? this
      : this.polyMap(...fns)
    ).emitter(empty);
  }
}