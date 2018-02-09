import IO from '../../lib/io';
import curry from '../util/curry';


// <> appendChild :: Element C -> (Element|Document) P => IO(C)
//                                                                        
export const appendChild = curry((child: Element, element: Element|Document) => 
  IO.from(() => element.appendChild(child), 'Append Child'));


// <> appendToElement :: (Element|Document) P -> Element C => IO(C)
//                                                                   
export const appendToElement = 
  curry((element: Element|Document, child: Element) => 
    IO.from(() => element.appendChild(child)));