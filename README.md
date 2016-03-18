# Lesson 6.2 - Block Scoped Variables

Let's explore block scoped variables shall we? Block scoped variables are
simply variables that are local to the block in which they were defined. Let's
explore this a bit with some code samples.

If we were to use `var` to declare a variable in this snippet, everything would
be just fine:

```js
for (var i = 0; i < 3; i++) {
  var j = i * i
}

console.log(j) // This will print '4', and is fine
```

But let's say we use `let` to declare that variable:

```js
for (let i = 0; i < 3; i++) {
  let j = i * i
}

console.log(j) // This will throw, because let is local to the `for` loop.
```

This is a subtle difference, but an important one. This really helps to keep
variables scoped to their local block, and avoids confusion for other developers
(and yourself).

Constants behave in exactly the same way as `let` when it comes to scoping.
It is for this reason that it is preferred to use `const` and `let` over `var`
as often as possible.

## Moving on
Easy! Block scoped variables are a simple concept, and using the right type
of variable declarations is crucial to writing good, clean code. Let's move
on and discuss block scoped functions!
