/// <reference path='event.d.ts' />

import curry from '../util/curry';
import Torrent from '../../lib/torrent';
import array from '../array/assure';
import contains from '../string/contain';
import on from './on';


// ⨍.proxy :: EventSpec -> Element -> ElementSpec => Torrent
//                                                          
export default curry(
  (eventSpecs: EventSpecs, parent: Element, required: ElementSpec) => {
    const validate = validator(required);

    return Torrent.from((callback) => 
      on(eventSpecs, callback, parent).performUnsafeOperation()
    ) .filter (
      validate.tag,
      validate.id, 
      validate.classes, 
      validate.attributes
    );
  }
);

let e = (e: Element) => e.tagName;

// ⨍.validator :: ElementSpec => ElementSpecTest
//                                              
const validator = ({tag, id, classes, attrs}: ElementSpec) => ({
  tag({target}) {
    let b = tag === undefined || tag.toUpperCase() === target.tagName;
    console.log(tag, b);
    return b;
  },
  id({target}) {
    return id === undefined || id === target.id;
  },
  classes({target}) {
    return classes === undefined || array(classes).every(clazz => 
      target.className.includes(clazz)
    );
  },
  attributes({target}) {
    if (attrs === undefined) return true;

    attrs = (attrs[0] instanceof Array)
      ? attrs
      : <any> [attrs];

    return (<any> attrs).every(([attr, value]) => 
      target.getAttribute(attr) === value
    );
  }
});
