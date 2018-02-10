import IO from "../../lib/io";

export default (element: HTMLElement) => IO.from(() =>
  (element.focus(), element)
);