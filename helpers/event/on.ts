///<reference path="event.d.ts" />

import IO from "../../lib/io";
import curry from "../util/curry";
import array from "../array/assure";


// <> on :: Type | Type[] -> Listener -> Element => IO Element
//                                                                
export default curry(
  (specs: EventSpecs, handler: EventListener, element: Element) => 
    IO.from(() => {

      array(specs).forEach(spec => {
        let isObject = false;
        let verify;
        let type = (spec instanceof Object)
          ? (isObject = true, 
            verify = verifySpec(spec[1]),
            spec[0])
          : spec;

        element.addEventListener(type, (event) => {
          if (!isObject || verify(event)) handler(event);
        });
      });
      
      return element
    })
);


const verifySpec = (spec) => (event) => {
  let key;
  for (key in spec) {
    if (spec[key] !== event[key]) {
      return false;
    }
  }
  return true;
}
