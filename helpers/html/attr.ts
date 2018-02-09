import curry from '../util/curry';
import foreachof from '../util/foreachof';
import IO from '../../lib/io';

// <> attr :: string -> string -> HTMLElement => IO Element
//                                                         
export default curry(
  (attr: string|string[], value: string|string[], element: HTMLElement) =>
    IO.from(() => ( 
      foreachof(attr, value)((attr, value) => 
        element.setAttribute(attr,value)),
      element
    ))
)