import curry from '../util/curry';

// <> match :: RegExp -> string => RegExpMatchArray
//                                                 
export default curry((regExp: RegExp, str: string) => str.match(regExp))
