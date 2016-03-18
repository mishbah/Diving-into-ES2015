# Lesson 7.1 - Introducing Classes

One of the most controversial new features of ES2015 are classes.
Classes are not baked into ES2015, but rather, are just some syntactic sugar
over a pattern that is well established in the JavaScript community.

This pattern is the prototype chain. Every object in JavaScript has an object
called the prototype. You can add functionality to the prototype of any
object that you would like, and JavaScript developers have been doing this
for years. So you can create something like a class like this:

```js
var Foo = function(x) {
  this.x = x
}

Foo.prototype = {
  add: function(y) {
    returh this.x + y
  }
}
```

You can convert this to an ES2015 style class like this:

```js
class Foo {
  constructor(x) {
    this.x = x
  }

  add(y) {
    return this.x + y
  }
}
```

This is a nicer looking syntax, but doesn't offer anything extra in the
way of functionality. There are some who argue that this is a recipe for
disaster, and when you introduce things like inheritance, you are setting
yourself up for nightmarish debugging sessions. Many people prefer using
`factory functions` over classes, because they offer much more flexibility
and prefer composition over inheritance.

Taking a deep dive into the differences between the two styles is out of the
scope of this course, but I will include links to some great articles on the
subject, and you can decide for yourself which pattern is best for you.

## Moving on
That's it for the introduction to classes! Let's move on to the next lesson
and learn about class definition and inheritance.
