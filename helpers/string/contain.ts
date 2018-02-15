import curry from "../util/curry";
import array from "../array/assure";

// ⨍.contains :: string | string[] -> string => boolean
//                                                     
export default (query: string|string[], text: string) => (
  array(query).every(str => text.includes(str))
);
