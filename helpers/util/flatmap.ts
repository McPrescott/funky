import {Monad, MonadicFn} from '../../types';
import curry from './curry';

export default curry((M: Monad, fm: MonadicFn) => M.flatMap(fm))