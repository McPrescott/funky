import curry from "../util/curry";

// ⨍.some :: Object -> Object => Boolean
//                                       
export default curry((assessor: Object, assessed: Object) => {
  let key;
  for (key in assessor) {
    if (assessor[key] === assessed[key]) {
      return true;
    }
  }
  return false;
})