import curry from '../util/curry';


// <> join :: string[] => string
//                              
export const join = (array: string[]) => array.join('');


// <> joinSpace :: string[] => string
//                                   
export const joinSpace = (array: string[]) => array.join(' ');


// <> joinWith :: string[] => string
//                                  
export const joinWith = curry((separator: string, array: string[]) => 
  array.join(separator));