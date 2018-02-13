import IO from "../../lib/io";

// <> selectAll :: string => IO [HTMLElement]
//                                           
export default (selector: string) => (
  IO.from(() => [...document.querySelectorAll(selector)])
);