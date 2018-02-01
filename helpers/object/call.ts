import curry from '../util/curry';


// <> call :: string -> Object => any
//                                   
export default curry((callable: string, obj: Object) => obj[callable]());