import curry from '../util/curry';


// <> at :: number -> string => char
//                                  
export const at = curry((index: number, str: string) => 
  str.charAt(index));


// <> first :: string => char
//                                                 
export const first = (str: string) => str.charAt(0);


// <> last :: string => char
//                          
export const last = (str: string) => str.charAt(str.length-1);