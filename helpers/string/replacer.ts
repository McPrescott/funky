import curry from '../util/curry';


// <> replacer :: RegExp -> (string => string) -> string => string
//                                                                
export default curry((regExp: RegExp, 
                      replacer :(str :string) => string, 
                      string: string) => 
  string.replace(regExp, replacer)
);