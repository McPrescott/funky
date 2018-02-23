/// <reference path='./events.d.ts'/>
/// <reference path='./event-assertions.d.ts' />

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
  assert?: AnyEventAssertion;
  opts?: boolean | AddEventListenerOptions;
}

interface EventSpec extends Spec {
  on: Events;
  assert?: EventAssertion;
}

interface DragEventSpec extends Spec {
  on: DragEvents;
  assert?: DragEventAssertion;
}

interface ErrorEventSpec extends Spec {
  on: ErrorEvents;
  assert?: ErrorEventAssertion;
}

interface FocusEventSpec extends Spec {
  on: FocusEvents;
  assert?: FocusEventAssertion;
}

interface KeyboardEventSpec extends Spec {
  on: KeyboardEvents;
  assert?: KeyboardEventAssertion;
}

interface MouseEventSpec extends Spec {
  on: MouseEvents;
  assert?: MouseEventAssertion;
}

interface UIEventSpec extends Spec {
  on: UIEvents;
  assert?: UIEventAssertion;
}