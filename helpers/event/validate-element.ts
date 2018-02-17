/// <reference path='./event.d.ts' />

import array from "../array/assure";


// ⨍.validator :: ElementSpec => ElementSpecTest
//                                              
export default class {
  private spec: ElementSpec;

  static of (spec: ElementSpec) {
    return new this(spec);
  }

  constructor(spec: ElementSpec) {
    this.spec = spec;
  }


  // μ.tag :: @-string -> Element => boolean
  //                                        
  tag (target) {
    const {tag} = this.spec;
    return tag === undefined || tag.toUpperCase() === target.tagName;
  }


  // μ.id :: @-string -> Element => boolean
  //
  id (target) {
    const {id} = this.spec;
    return id === undefined || id === target.id;
  }


  // μ.classes :: @-string -> Element => boolean
  //                                            
  classes (target) {
    const {classes} = this.spec;
    return classes === undefined || array(classes).every(clazz => 
      target.className.includes(clazz)
    );
  }


  // μ.attributes :: @-string -> Element => boolean
  //                                               
  attributes (target) {
    let {attrs} = this.spec;

    if (attrs === undefined) return true;

    attrs = (attrs[0] instanceof Array)
      ? attrs
      : <any> [attrs];

    return (<any> attrs).every(([attr, value]) => 
      target.getAttribute(attr) === value
    );
  }


  // μ.all :: @-Object -> Element => boolean
  //                                          
  all (target) {
    return this.tag(target) 
      && this.id(target) 
      && this.classes(target) 
      && this.attributes(target);
  }
}
