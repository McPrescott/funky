interface ElementSpec {
  tagName?: string;
  id?: string;
  classes?: Variadic<string>;
  attrs?: Variadic<bi<string>>;
}