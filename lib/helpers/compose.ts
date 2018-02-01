export default (...fns: Function[]) => (arg: any) => 
  fns.reduce((prev, current) => current(prev), arg);