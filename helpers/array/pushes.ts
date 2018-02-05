import curry from '../util/curry';

// <> pushTo :: [] -> a => a
//                           
export const pushTo = curry((array: any[], ...x: any[]) => {
  array.push(...x);
  return (x.length === 1)? x[0]: x;
})


// <> push :: a -> [] => a
//                           
export const push = curry((x: any, array: any[]) => {
  array.push(x);
  return x;
})