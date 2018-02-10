import IO from '../../lib/io';
import curry from '../util/curry';


// <> innerHtml :: string -> HTMLElement => IO HTMLElement
//                                                        
export default curry((text: string, element: HTMLElement) => 
  IO.from(() => (
    element.innerHTML = text,
    element
  ))
);
