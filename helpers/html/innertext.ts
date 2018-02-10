import IO from '../../lib/io';
import curry from '../util/curry';



// <> innerText :: string -> HTMLElement => IO HTMLElement
//                                                        
export default curry((text: string, element: HTMLElement) => 
  IO.from(() => (
    element.innerText = text,
    element
  ))
);
