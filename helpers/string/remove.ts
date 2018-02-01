import curry from '../util/curry';


// <> remove :: string | RegExp -> string => string
export const remove = curry((search: string|RegExp, str: string) => 
  str.replace(search,''));


// <> removeSpace :: string => string
//                                   
export const removeSpace = remove(/\s/gm);