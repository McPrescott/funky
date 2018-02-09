// <> assure :: a | [a] => [a]
//                                 
export default (value: any) => (
  Array.isArray(value)? value : [value]
);