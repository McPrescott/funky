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
      validate.id, 
      validate.classes, 
      validate.attributes
    );
  }
);

// ⨍.validator :: ElementSpec => ElementSpecTest
//                                              
const validator = ({id, classes, attrs}: ElementSpec) => ({
  id({target}) {
    return id === undefined || id === target.id;
  },
  classes({target}) {
    return classes === undefined || array(classes).every(clazz => 
      target.className.includes(clazz)
    );
  },
  attributes({target}) {
    return attrs === undefined || array(attrs).every(([attr, value]) => 
      target.getAttribute(attr) === value
    );
  }
});
