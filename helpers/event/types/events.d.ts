declare type AnyEvent = keyof WindowEventMap;

declare type ErrorEvents = "error";

declare type Events = 
  | "afterprint"
  | "beforeprint"
  | "canplay"
  | "canplaythrough"
  | "change"
  | "compassneedscalibration"
  | "durationchange"
  | "emptied"
  | "input"
  | "invalid"
  | "load"
  | "loadeddata"
  | "loadedmetadata"
  | "loadstart"
  | "offline"
  | "online"
  | "orientationchange"
  | "pause"
  | "play"
  | "playing"
  | "ratechange"
  | "reset"
  | "seeked"
  | "seeking"
  | "submit"
  | "suspend"
  | "timeupdate"
  | "unload"
  | "volumechange"
  | "waiting";

declare type UIEvents = 
  | "abort"
  | "resize"
  | "scroll"
  | "select";

declare type MouseEvents = 
  | "click" 
  | "dblclick" 
  | "mousedown" 
  | "mouseenter"
  | "mouseleave"
  | "mousemove"
  | "mouseout"
  | "mouseover"
  | "mouseup";

declare type KeyboardEvents =
  | "keydown"
  | "keypress"
  | "keyup";

declare type FocusEvents =
  | "blur"
  | "focus";

declare type DragEvents =
  | "drag"
  | "dragend"
  | "dragenter"
  | "dragleave"
  | "dragover"
  | "dragstart"
  | "drop";
