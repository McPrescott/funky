///<reference path="../../types/general.d.ts" />
///<reference path="types/event-specs.d.ts" />


import IO from "../../lib/io";
import curry from "../util/curry";
import array from "../array/assure";
import listenerFrom from "./listener-from";


// ⨍.on :: AnyEventSpec([]?) -> Listener -> Element => IO Element
//---------------------------------------------------------------
export default curry((
  eventSpecs: Variadic<AnyEventSpec>, 
  handler: EventListener, 
  element: Element) => 
    IO.from(() => {
      array(eventSpecs).forEach(listenerFrom(element, handler));
      return element;
    })
);
