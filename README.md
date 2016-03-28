# Lesson 6.1 - Constants and Let

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

You can mutate objects in the same way. This is allowed because you are adding
a value to the array or object, and not reassigning. The `const` assignment
only prevents you from reassigning the variable to a new value, but does not
prevent you from mutating the value.

Another thing to note about the `const` type is that it cannot be used before
assignment. Whereas this is perfectly acceptable:

```js
typeof bar
var bar = 1
```

This is not allowed:

```js
typeof bar
const bar = 1
```

The above will throw an error because you are attempting to access the variable
before it has been assigned. In the first example, we are using the `var`
keyword, which `hoists` the variable assignment to the top of the execution,
whereas the `const` keyword does not do this.

## Let

The `let` keyword assignment has been around for some time, but with ES2015
it has some new features associated with it. It has been said that `let` is the
new `var`, but not because they are the same thing. The `let` keyword now
defines a block scoped variable, just like const. It has the same properties as
described above, and allows you to have finer grained control over the scoping
of your variables as opposed to `var`.

## Wrapping up

Constants are great to use in most cases. Use `let` when you will need to
reassign a variable for any reason, and `const` when you know it's only a
single use variable.

## Moving on
That's it for our exploration of the new `const` type in ES2015, let's move on
and start learning about block scoping!
