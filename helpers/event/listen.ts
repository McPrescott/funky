///<reference path="event.d.ts" />

import curry from "../util/curry";
import Torrent from '../../lib/torrent';
import array from "../array/assure";


// ⨍.listen :: EventSpecs -> Element => Torrent
//                                             
export default curry((specs: EventSpecs, element: Element) => {
  Torrent.from((handler) => {

    array(specs).forEach(spec => {
      let isObject = false;
      let verify = ({key}) => spec.key === key;
      let type = (spec instanceof Object)
        ? (isObject = true, spec.type) 
        : spec; 
      
      element.addEventListener(type, (event) => {
        if (!isObject || verify(event))
          handler(event);
      });
    });
    
    return element
  })
})