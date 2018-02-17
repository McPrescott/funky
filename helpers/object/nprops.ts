import curry from '../util/curry';


// ⨍.prop :: string -> Object => any
//                                   
export default curry((props: string[], object: Object) => 
  props.reduce((obj: Object, prop) => 
    obj[prop],
    object
  )
);