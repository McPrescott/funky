import IO from "../../lib/io";
import curry from "../util/curry";
import assure from "../array/assure";


// [Listener: EventListener | EventListenerObject]
// <> listen :: string -> Listener -> Element => Element
//                                                      
export default curry((types: string|string[], handler: EventListener|EventListenerObject, element: Element) => 
  IO.from(() => ( 
    types = assure(types),
    types.forEach(type => element.addEventListener(type, handler)),
    element
  ))
);