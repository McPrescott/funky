/// <reference path='event.d.ts' />

import curry from '../util/curry';
import Torrent from '../../lib/torrent';
import array from '../array/assure';
import contains from '../string/contain';
import on from './on';
import Validator from './validate-element';


// ⨍.proxy :: EventSpec -> Element -> ElementSpec => Torrent
//                                                          
export default curry(
  (eventSpecs: EventSpecs, parent: Element, required: ElementSpec) => {
    const validate = Validator.of(required);

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
