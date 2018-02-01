import curry from '../util/curry';


// <> split :: string -> string => string[]
export default curry((separator: string, str: string) => 
  str.split(separator))