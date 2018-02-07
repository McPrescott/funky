import IO from '../../lib/io';


// <> strip :: Element => IO(Element)
//                                   
export default (element: HTMLElement) => IO.from(() => {
  element.innerHTML = '';
  return element;
}, 'Strip Element');