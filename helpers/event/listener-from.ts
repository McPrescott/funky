/// <reference path='./types/events.d.ts' />
/// <reference path='./types/event-specs.d.ts' />

import curry from '../util/curry';
import every from '../object/every';
import some from '../object/some';


// ⨍.listenerFrom :: Element|string -> EventListener -> AnyEventSpec => void
//---------------------------------------------------------------------------
export default curry((
  element: Element | string,
  handler: EventListener, 
  spec: AnyEventSpec | AnyEvent) => {
    let isObject, verify, opts;

    element = (typeof element === 'string')
      ? document.querySelector(element)
      : element;

    let type = (typeof spec === 'object')
      ? (isObject = true, 
        verify = verifySpec(spec),
        opts = spec.opts,
        spec.on)
      : spec

    element.addEventListener(type, (event) => {
      if (!isObject || verify(event)) handler(event);
    }, opts);
})


// ⨍.verifySpec :: AnyEventSpec -> Event => boolean
//-------------------------------------------------
const verifySpec = (spec: AnyEventSpec) => (event) => {
  console.log('Verifying Element Specification');
  
  if (!spec.assert && !spec.exclude) {
    console.log('Spec is not defined');
    return true;
  }
  else if (spec.assert && !every(spec.assert, event)) {
    console.log('Event does not contain asserted properties');
    return false;
  }
  else if (spec.exclude && some(spec.exclude, event)) {
    console.log('Event contains excluded properties');
    return false;
  }
  else {
    console.log('Event is to spec');
    return true;
  }
}