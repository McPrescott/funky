import curry from '../util/curry';

// <> pushTo :: array -> a => a
//                           
export const pushTo = curry((array: any[], x: any) => {
  array.push(x);
  return x;
})


// <> push :: a -> array => a
//                           
export const push = curry((x: any, array: any[]) => {
  array.push(x);
  return x;
})