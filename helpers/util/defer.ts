import { NodeAsync } from "../../types";

export default (err, data): NodeAsync => (callback) =>
  process.nextTick(callback, err, data);