///<reference path='types/event-specs.d.ts' />

import curry from "../util/curry";
import Torrent from "../../lib/torrent";
import array from "../array/assure";
import listenFrom from "./listener-from";


// ⨍.listen :: AnyEventSpec -> Element => Torrent
//                                             
export default curry((specs: Variadic<AnyEventSpec>, element: Element) => {
  Torrent.from((handler) => {
    array(specs).forEach(listenFrom(handler));
    return element
  })
})