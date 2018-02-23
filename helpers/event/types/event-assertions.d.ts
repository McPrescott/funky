/// <reference path='./event-partials.d.ts' />

declare type AnyEventAssertion = 
  | EventAssertion
  | DragEventAssertion
  | ErrorEventAssertion
  | FocusEventAssertion
  | KeyboardEventAssertion
  | MouseEventAssertion
  | UIEventAssertion;

interface EventAssertion extends PartialEvent {
  not?: PartialEvent;
}
interface DragEventAssertion extends PartialDragEvent {
  not?: PartialDragEvent;
}
interface ErrorEventAssertion extends PartialErrorEvent {
  not?: PartialErrorEvent;
}
interface FocusEventAssertion extends PartialFocusEvent {
  not?: PartialFocusEvent;
}
interface KeyboardEventAssertion extends PartialKeyboardEvent {
  not?: PartialKeyboardEvent;
}
interface MouseEventAssertion extends PartialMouseEvent {
  not?: PartialMouseEvent;
}
interface UIEventAssertion extends PartialUIEvent {
  not?: PartialUIEvent;
}
