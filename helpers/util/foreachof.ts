import assureArray from '../array/assure';

// <> foreachof :: [a] => ((...a) => b) => [b]
//                                            
export default (...values) => (cb: Function) => {
  values = values.map(assureArray)
  let max = values.reduce((prev, current) => current.length, 0);
  
  //# Variable Length Warning
  if (!values.every((array) => array.length === max))
    console.warn(`foreachof was called with a variable number of items in each argument.`);
  

  let result = [];
  for (let i = 0; i < max; i++) {
    let current = values.map(arr => arr[i]);
    result.push(cb.call(null, ...current));
  }

  return result;
}