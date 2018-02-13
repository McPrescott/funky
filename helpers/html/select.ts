import IO from "../../lib/io";

// <> select :: string => IO HTMLElement
export default (selector: string) => (
  IO.from(() => document.querySelector(selector))
);