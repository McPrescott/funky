import curry from '../util/curry';


// <> prop :: string -> Object => any
//                                   
export default curry((prop: string, object: Object) => object[prop]);