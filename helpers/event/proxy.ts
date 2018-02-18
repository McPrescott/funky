/// <reference path='event.d.ts' />

import Validator from './validate-element';
import curry from '../util/curry';
import Torrent from '../../lib/torrent';
import prop from '../object/prop';
import array from '../array/assure';
import contains from '../string/contain';
import on from './on';


// ⨍.proxy :: EventSpec -> Element -> ElementSpec => Torrent
//                                                          
export default curry(
  (eventSpecs: EventSpecs, parent: Element, required: ElementSpec) => {
    const validate = Validator.of(required);

    return Torrent.from((callback) => 
        on(eventSpecs, callback, parent).performUnsafeOperation())
      .filter(({target}) => validate.all.bind(validate)(target));
  }
);
