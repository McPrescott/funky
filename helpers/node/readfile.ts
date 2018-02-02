import Async from '../../lib/async';
import {readFile} from 'fs';

// <> readFile:: string -> Async string
//                                     
export default (path: string) => 
  new Async((callback) => readFile(path, 'utf8', callback));
