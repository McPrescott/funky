import curry from '../util/curry';


// <> slice :: number -> number -> string => string
//                                                 
export const slice = 
  curry((start: number, end: number, str: string) => str.slice(start, end));


// <> sliceFirst :: number -> string => string
//                                            
export const sliceFirst = curry((index: number, str: string) => 
  str.slice(0, index));


// <> sliceLast :: number -> string => string
//                                           
export const takeLast = curry((index: number, str: string) => 
  str.slice(index));