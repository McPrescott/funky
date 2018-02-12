import IO from "../../lib/io";
import curry from "../util/curry";
import assure from "../array/assure";


// [Listener: EventListener | EventListenerObject]
// [Type]: string | {event: string, key: string}
// <> listen :: Type | Type[] -> Listener -> Element => Element
//                                                             
export default curry((types, handler, element) => 
  IO.from(() => {
    types = assure(types);
    
    types.forEach(type => {
      if (typeof type === 'string') {
        element.addEventListener(type, handler)
      } else {
        element.addEventListener(type.event, event => {
          if (type.key === event.key) {
            handler(event);
          }
        })
      }
    });
    
    return element
  })
);