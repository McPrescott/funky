type bi<T> = [T, T];
type tri<T> = [T, T, T];
type quad<T> = [T, T, T, T];

type Variadic<T> = T | T[];

interface Predicate {
  (...a: any[]): boolean
}