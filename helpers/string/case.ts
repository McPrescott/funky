import curry from '../util/curry';


// <> upper :: string => string
//                             
export const upper = (str: string) => str.toUpperCase();


// <> upperFirst :: string => string
//                                  
export const upperFirst = (str: string) => 
  str.charAt(0).toUpperCase().concat(str.slice(1));


// <> upperPos :: number -> string => string
export const upperPos = curry((index: number, str: string) =>
  str.slice(0, index).concat(upperFirst(str.slice(index)))
);

// <> lower :: string => string
//                             
export const lower = (str: string) => str.toLowerCase();


// <> lowerFirst :: string => string
//                                  
export const lowerFirst = (str: string) => 
  str.charAt(0).toLowerCase().concat(str.slice(1));


// <> lowerPos :: number -> string => string
export const lowerPos = curry((index: number, str: string) =>
  str.slice(0, index).concat(lowerFirst(str.slice(index)))
);
