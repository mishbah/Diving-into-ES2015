# Lesson 6.1 - Constants

ES2015 introduced a new variable type: `const`. This new variable type should
not be confused with an immutable data structure like something from Immutable.js.
This only means that the variable cannot be reassigned. This is illegal:

```js
const x = 1
x = 2 // Illegal
```

However, if the const is assigned an object such as an array, you can mutate
the array:

```js
const ary = [1, 2, 3]
ary.push(4) // This is allowed
```

You can mutate objects in the same way.

Another thing to note about the `const` type is that it cannot be used before
assignment. Whereas this is perfectly acceptable:

```js
typeof bar
var bar = 1
```

This will throw:

```js
typeof bar
const bar = 1
```

Constants are great to use in most cases. Use `let` when you will need to
reassign a variable for any reason, and `const` when you know it's only a
single use variable. And `var`, well, `let` is the new `var`.

## Moving on
That's it for our exploration of the new `const` type in ES2015, let's move on
and start learning about block scoping!
