import curry from '../util/curry';


// <> assign :: Object -> Object => Object 
//                                        
export default curry((obj: Object, props: Object) => {
  for(let key in props){
    obj[key] = props[key];
  }
  return obj;
});