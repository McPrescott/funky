import {Functor, Monad, MonadicFn, Map} from '../types';
import compose from '../helpers/util/compose';
import hold from '../helpers/util/hold';

let inc = 0;        //! debug
let debug = true;   //! debug

interface MonadicIO { (any): IO }

export default class IO implements Functor, Monad {
  
  // -- Properties -------------------------------------------------------------
  
  effect: Function;
  id: number;
  name: string;


  // -- Static Methods ---------------------------------------------------------

  // <> of :: a => IO a
  //                   
  static of(x: any){
    return new IO(hold(x));
  }


  // <> from :: (a => b) => IO b
  //                            
  static from(effect: Function, name?:string){
    return new IO(effect, name);
  }


  // <> new :: (a => b) => IO b
  //                           
  constructor(effect: Function, name?: string){
    this.effect = effect;
    // if (debug){               //! debug
    //   this.id = inc++;
    //   this.name = name || effect.name;
    //   console.log(`IO: ${this.id} created with name ${this.name}`); //! debug
    // }
  }


  // -- Methods ----------------------------------------------------------------

  // <> map :: @IO a -> (a => b) => IO b
  //                                    
  map(fn: Map) {
    return new IO(compose(this.effect, fn));
  }


  // <> polyMap :: @IO a -> [(a => b), (b => c)...(m => n)] => IO n
  //                                                               
  polyMap(...fns: Map[]) {
    return this.map(compose(...fns));
  }


  // <> flatMap :: @IO a -> (a => IO b) => IO b
  //                                  
  flatMap(fn: MonadicFn) {
    const thisOperation = this.performUnsafeOperation.bind(this);
    const mappedOperation = (...args) => {
      const io = (<IO>fn.call(null, ...args));
      return io.performUnsafeOperation.bind(io).call();
    };

    // console.log(`Flat Maping ${this.id}`); //! debug
    
    return IO.from(compose(
      thisOperation,
      mappedOperation
    ), 'FlatMapped IOs');
  }

  // <> flatmap :: alias for flatMap
  //                                
  flatmap(fn: MonadicFn) {
    return this.flatMap(fn);
  }

  //# Flatmap: Take IO and map a function that returns and IO
  //# IO.performUnsafeOperation returns a value `a`
  //# IO IO a.effect() -> IO b.effect() => IO c
  //# So IO c contains the value of IO.1 and IO.2s composed effects
  //# Without containers...
  //# a -> (a => b) => b which is really simple...


  // <> flatCommap :: @IO a -> [(a => IO b), (a => IO c)... (a => IO N)] => IO N
  //                                                                            
  flatCommap(...fns: MonadicIO[]) {
    const thisOperation = this.performUnsafeOperation.bind(this);

    return IO.from(() => {
      let a = thisOperation(),
        fN = fns.pop();

      fns.forEach((fn) => fn(a).performUnsafeOperation() );
      
      return fN(a).performUnsafeOperation();
    })
  }


  // -- Impure -----------------------------------------------------------------

  // <> performUnsafeOperation :: void
  //                                  
  performUnsafeOperation(){
    //! debug 
    // console.log(`Calling Unsafe Operation on: ${this.id}.${this.name || ""}`);
    return this.effect();
  }
}
