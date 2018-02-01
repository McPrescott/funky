import IO from '../../lib/io';


// <> strip :: Element => IO(Element)
//                                   
export default (element: HTMLElement) => new IO(() => {
  element.innerHTML = '';
  return element;
});