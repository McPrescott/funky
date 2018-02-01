import curry from '../util/curry';


// <> replace :: string | RegExp -> string -> string => string
export default curry((search: string|RegExp, replace: string, str: string) => 
  str.replace(search, replace))