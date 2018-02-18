declare type Events = keyof WindowEventMap;

declare type MouseEvents = 'mousedown' | 'mouseup' | 'mousemove' | 'mouseover' | 'mouseout' | 'mousewheel' | 'scroll'

declare type KeyEvents = 'keydown' | 'keypress' | 'keyup';


declare enum MouseButtons {
  'left' = 0,
  'middle' = 1,
  'right' = 2,
  'fourth' = 3,
  'fifth' = 4,
}


interface MouseEventSpec {
  0: MouseEvents;
  1: {
    altKey?: boolean;
    ctrlKey?: boolean;
    button?: MouseButtons;
    x?: number;
    y?: number;
    screenX?: number;
    screenY?: number;
  }
}

interface KeyEventSpec {
  0: KeyEvents;
  1: {
    altKey?: boolean;
    ctrlKey?: boolean;
    code?: number;
    key?: string | string[];
    repeat?: boolean;
    shiftKey?: boolean;
  }
}

declare type EventSpec = string | KeyEventSpec | MouseEventSpec;
declare type EventSpecs = EventSpec | EventSpec[];

interface ElementSpec {
  tag?: string,
  id?: string,
  classes?: string|string[],
  attrs?: [string, string] | [string, string][]
}
