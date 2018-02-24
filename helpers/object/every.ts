import curry from "../util/curry";

// ⨍.every :: Object -> Object => Boolean
//                                       
export default curry((assessor: Object, assessed: Object) => {
  let key;
  for (key in assessor) {
    if (assessor[key] !== assessed[key]) {
      return false;
    }
  }
  return true;
})