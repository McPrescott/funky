import curry from '../util/curry';
import Torrent from '../../lib/torrent';
import array from '../array/assure';
import contains from '../string/contain';


interface KeyEventSpec {
  type: string
  key: string | string[]
}
declare type SingleEventSpec = string | KeyEventSpec;
declare type EventSpec = SingleEventSpec | SingleEventSpec[];

interface ElementSpec {
  id?: string,
  classes?: string|string[],
  attrs?: [string, string] | [string, string][]
}


// ⨍.proxy :: EventSpec -> Element -> ElementSpec => Torrent
//                                                          
export default curry(
  (eventSpecs: EventSpec, parent: Element, target: ElementSpec) => {
    
    let {id, classes, attrs} = target;

    const isTarget = (element: Element) => {
      let elemClasses = element.classList;

      if (target.id !== undefined && target.id !== element.id) {
        return false;
      }

      if (classes !== undefined && !contains(target.classes, element.className)){
        return false;
      }

      if (attrs !== undefined && ! array(attrs).every(
        ([attr, value]) => element.getAttribute(attr) === value
      )) {
        return false;
      }

      return true;
    }

    return Torrent.from((callback) => {
      array(eventSpecs).forEach(eventSpec => {
        
        if (typeof eventSpec === 'string') {
          parent.addEventListener(eventSpec, (event) => {
            if (isTarget(<Element> event.target)) {
              callback(event)
            }
          });
        } else {
          parent.addEventListener(eventSpec.type, (event) => {
            if (event.key === eventSpec.key && isTarget(event.target)) {
              callback(event);
            }
          })
        }
      })
    })
  }
);
