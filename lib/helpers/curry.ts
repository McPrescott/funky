export default (fn: Function): Function => {
  const arity = fn.length;
  
  return function inner(...args){
    if (args.length >= arity)
      return fn.apply(null, args);
    
    return (...moreArgs) => inner(...args, ...moreArgs);
  }
}