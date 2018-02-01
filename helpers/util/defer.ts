import { NodeAsync } from "../types/index";

export default (err, data): NodeAsync => (callback) =>
  process.nextTick(callback, err, data);