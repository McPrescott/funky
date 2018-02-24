/// <reference path='./events.d.ts'/>
/// <reference path='./event-partials.d.ts' />

declare type AnyEventSpec =
  | EventSpec
  | DragEventSpec
  | ErrorEventSpec
  | FocusEventSpec
  | KeyboardEventSpec
  | MouseEventSpec
  | UIEventSpec;

declare abstract class Spec {
  on: AnyEvent;
  assert?: AnyPartialEvent;
  exclude?: AnyPartialEvent;
  opts?: boolean | AddEventListenerOptions;
}

interface EventSpec extends Spec {
  on: Events;
  assert?: PartialEvent;
  exclude?: PartialEvent;
}

interface DragEventSpec extends Spec {
  on: DragEvents;
  assert?: PartialDragEvent;
  exclude?: PartialDragEvent;
}

interface ErrorEventSpec extends Spec {
  on: ErrorEvents;
  assert?: PartialErrorEvent;
  exclude?: PartialErrorEvent;
}

interface FocusEventSpec extends Spec {
  on: FocusEvents;
  assert?: PartialFocusEvent;
  exclude?: PartialFocusEvent;
}

interface KeyboardEventSpec extends Spec {
  on: KeyboardEvents;
  assert?: PartialKeyboardEvent;
  exclude?: PartialKeyboardEvent;
}

interface MouseEventSpec extends Spec {
  on: MouseEvents;
  assert?: PartialMouseEvent;
  exclude?: PartialMouseEvent;
}

interface UIEventSpec extends Spec {
  on: UIEvents;
  assert?: PartialUIEvent;
  exclude?: PartialUIEvent;
}