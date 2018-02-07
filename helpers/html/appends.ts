import IO from '../../lib/io';
import curry from '../util/curry';


// <> appendChild :: Element -> (Element|Document) => IO(Element|Document)
//                                                                        
export const appendChild = curry((child: Element, element: Element|Document) => 
  IO.from(() => element.appendChild(child), 'Append Child'));


// <> appendToElement :: Element|Document -> Element => IO(Element)
//                                                                   
export const appendToElement = 
  curry((element: Element|Document, child: Element) => 
    IO.from(() => element.appendChild(child)));