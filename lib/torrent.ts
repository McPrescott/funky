import {Functor, Map} from './types/index';
import compose from './helpers/compose';
import curry from './helpers/curry';


export class Torrent {
  private emitter: Function;

  static fromEvent(event: string, element: Window|Element|string|void){
    return new Torrent((callback: EventListener) => {
      element = (typeof element === 'string')? document.querySelector(element):
        (element instanceof HTMLElement)?      element:
        /* Otherwise */                        window;
      element.addEventListener(event, callback);
    }) 
  }

  constructor(emitter: Function){
    this.emitter = emitter
  }

  map(fn: Map) {
    return new Torrent((callback: Function) => 
      this.emitter(compose(fn, callback)));
  }

  polyMap(...fns: Map[]){
    return this.map(compose(...fns));
  }

  from(arg) {
    return new Torrent(callback => this.emitter(
      compose(input => input? arg: input, callback)))
  }

  // *** Impurity *** ----------------------------------------------------------

  unleash(): void {
    this.emitter(function(){});
  }
}