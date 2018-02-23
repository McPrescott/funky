type Parital<Obj> = {
  [Prop in keyof Obj]?: Obj[Prop];
}

declare type AnyPartialEvent =  
  | PartialDragEvent
  | PartialErrorEvent 
  | PartialEvent 
  | PartialFocusEvent
  | PartialKeyboardEvent
  | PartialMouseEvent
  | PartialUIEvent;

declare type PartialDragEvent = Partial<DragEvent>;
declare type PartialErrorEvent = Partial<ErrorEvent>;
declare type PartialEvent = Partial<Event>;
declare type PartialFocusEvent = Partial<FocusEvent>;
declare type PartialKeyboardEvent = Partial<KeyboardEvent>;
declare type PartialMouseEvent = Partial<MouseEvent>;
declare type PartialUIEvent = Partial<UIEvent>;


