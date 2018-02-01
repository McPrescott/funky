import {Functor, Map} from '../../types';
import curry from './curry';

export default curry((fn: Map, F: Functor) => (F? F.map(fn): null))