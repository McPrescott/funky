import curry from '../util/curry';


// <> foreach :: (a, number, array) -> array => array
//                                                   
export default curry((callback, array: any[]) => {
  array.forEach(callback);
  return array;
}) 