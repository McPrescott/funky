/// <reference path='types/element-spec.d.ts' />

import array from "../array/assure";


// ⨍.tagName :: ElementSpec -> Element => boolean
//------------------------------------------------
const tagName = (spec: ElementSpec, target: Element) => {
  const {tagName} = spec;
  return (tagName === undefined || tagName.toUpperCase() === target.tagName);
}


// ⨍.id :: ElementSpec -> Element => boolean
//-------------------------------------------
const id = (spec: ElementSpec, target: Element) => {
  const {id} = spec;
  return id === undefined || id === target.id;
}


// ⨍.classes :: ElementSpec -> Element => boolean
//------------------------------------------------
const classes = (spec: ElementSpec, target: Element) => {
  const {classes} = spec;
  return classes === undefined || array(classes).every(clazz => 
    target.className.includes(clazz)
  );
}


// ⨍.attributes :: ElementSpec -> Element => boolean
//---------------------------------------------------
const attributes = (spec: ElementSpec, target: Element) =>  {
  let {attrs} = spec;

  if (attrs === undefined) return true;

  attrs = (typeof attrs[0] !== 'string')
    ? attrs
    : [attrs] as bi<string>[];

  return (attrs as bi<string>[]).every(([attr, value]) => 
    target.getAttribute(attr) === value
  );
}


// ⨍.validate :: ElementSpec -> Element => boolean
//-------------------------------------------------
export default (spec: ElementSpec) => (target: Element) => {
  return tagName(spec, target) 
    && id(spec, target) 
    && classes(spec, target) 
    && attributes(spec, target);
}