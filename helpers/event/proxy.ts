/// <reference path='types/event-specs.d.ts' />
/// <reference path='types/element-spec.d.ts' />

import validator from './validate-element';
import curry from '../util/curry';
import Torrent from '../../lib/torrent';
import prop from '../object/prop';
import array from '../array/assure';
import contains from '../string/contain';
import on from './on';


// ⨍.proxy :: EventSpec -> Element -> ElementSpec => Torrent
//                                                          
export default curry((eventSpecs: Variadic<AnyEventSpec | AnyEvent>, 
  parent: Element, 
  required: ElementSpec) => {
    const validate = validator(required);

    return Torrent.from((callback) => 
        on(eventSpecs, callback, parent).performUnsafeOperation())
      .filter(({target}) => validate(target));
  }
);
