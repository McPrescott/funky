# Funky

  Implementations of common generic `functors`, `monads` and `applicative`
`functors`. Library also contains various helper functions to compose with
containers.

  This repositories main purpose is self-education. `Funky` is subject to
arbitrary breaking changes without warning.

## Library
-------------

### Contianer

  Generic `Functor`, `Applicative` and `Monad`. Honestly haven't found many use
cases for it. The key take-away from `Container` is for a mental model of how
functional containers are implemented.


### Torrent

  Much more useful. `Torrent` is used as a stream-like object; its primary
motivation is to add a functional layer of abstraction on top of asynchronus
callback APIs like Html's `Event Listener`.