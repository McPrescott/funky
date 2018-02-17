declare type Events = keyof WindowEventMap;

declare enum MouseButtons {
  'left' = 0,
  'middle' = 1,
  'right' = 2,
  'fourth' = 3,
  'fifth' = 4,
}


//*** I like this better ***
//# let spec = ['keypress', {key: 'enter'}];

interface MouseEventSpec {
  type: Events;
  button: MouseButtons;
}

interface KeyEventSpec {
  type: Events;
  key: string | string[];
}

declare type EventSpec = string | KeyEventSpec;
declare type EventSpecs = EventSpec | EventSpec[];

interface ElementSpec {
  tag?: string,
  id?: string,
  classes?: string|string[],
  attrs?: [string, string] | [string, string][]
}

interface ElementSpecTest {
  id: Predicate,
  classes: Predicate,
  attrs: Predicate
}