import {NodeCallback} from '../index';

export interface NodeAsync {
  (fn: NodeCallback): any
}