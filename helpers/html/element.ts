import curry from '../util/curry';
import assign from '../object/assign';


interface ElementProps {
  id?: string,
  className?: string,
  innerText?: string,
  type?: string,
  nodeValue?: string,
  value?: string,
  size?: number
};

// <> element :: (string, ElementProps?) => HTMLElement
//                                                     
export default (tag: string, props?: ElementProps) => {
  const element = document.createElement(tag);
  
  if (!props)
    return element;
  
  assign(element, props);
  return element;
}