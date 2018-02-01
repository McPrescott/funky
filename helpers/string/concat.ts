import curry from '../util/curry';


// <> prepend :: string -> string => string
//                                         
export const prepend = curry((str: string, str2:string) => str.concat(str2));


// <> append :: string -> string => string
//                                        
export const append = curry((str: string, str2:string) => str2.concat(str));