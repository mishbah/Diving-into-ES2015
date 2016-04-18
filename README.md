# Lesson 7.2 - Class Definition and Inheritance

Let's discuss how to define classes, and how ES2015 introduces class inheritance
shall we?

## Class Definition

Defining a class is a very simple thing to do. It can be simple as:

```js
class Vehicle {}
```

Of course, this class doesn't do much, and we can't initialize it with anything
useful. Let's add a constructor:

```js
class Vehicle {
  constructor(make, model, year) {
    Object.assign(this, { make, model, year })
  }
}
```

Ok cool, so what we've done here is simply set the variable names that are
passed in when creating an instance of the class on `this`. You can create an
instance of this class by using the `new` keyword:

```js
var car = new Vehicle('Toyota', 'Corolla', 2016)
```

That's great, but it's still not very useful. One thing we can do is add a
method to the class that make it a bit more useful:

```js
class Vehicle {
  constructor(make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }

  print() {
    return `${this.year} ${this.make} ${this.model}`
  }
}
```

We made this class a bit more useful by adding a function that can be accessed
from the instance of the class:

```bash
> var car = new Vehicle('Toyota', 'Corolla', 2016)
> car.print()
-> 2016 Toyota Corolla
```

## Inheritance

The introduction of inheritance along with the `class` keyword is very hotly
contested, and for good reason. With inheritance, you can make a class `extend`
another class, and thus inheriting all of it's properties. Let's take a look:

```js
class Truck extends Vehicle {
  constructor(make, model, year, drive) {
    super(make, model, year)
    this.drive = drive
  }
}
```

What you see here is that we've created a new class called `Truck` that inherits
from `Vehicle`. It will act in the same way as a `Vehicle` class, but requires
once extra parameter during initialization.

```bash
> var truck = new Truck('Dodge', 'Ram', 2016, '4WD')
> truck.print()
-> 2016 Dodge Ram
```

So what have we gained by using inheritance? Not much, just the reuse of the
parent classes functions and constructor. But this approach tightly couples
the child class to the parent class. You'll also notice that in the constructor
of the `Truck` class I used the `super` keyword. What this does is invoke the
parent classes constructor method with the variables you pass into it. As you
can imagine, this can end up being a difficult thing to debug, and the child
class is forced to conform entirely to the interface that the parent class
has defined.

While class inheritance can be used safely, it is wise to use it in moderation
with a sprinkle here and there.

Now that we know how to create a class, let's convert all the code we have
been writing for our tax calculator and receipt printer over to a class
based module. Let's open up the `calculator.js` file and replace the whole
thing with our brand new class:

```js
import { strip } from './strings'

export default class Calculator {
  constructor(items = [], taxRate = 8) {
    this.items = items
    this.taxRate = taxRate
  }

  calculateTax(item) {
    if (!item.taxable) return 0
    return item.price * this.taxRate / 100
  }

  calculate() {
    let total = 0, totalTax = 0

    this.items.forEach(item => {
      total += item.price
      totalTax += this.calculateTax(item)
    })

    return {total, totalTax}
  }

  printReceipt() {
    let {total, totalTax} = this.calculate()

    return strip`
      ${this.items.map(item => item.price).join('\n')}
      ${'-'.repeat(30)}
      Sub-Total: ${total}
      ${'='.repeat(30)}
      Tax: ${totalTax}
      ${'='.repeat(30)}
      Total: ${total + totalTax}
    `
  }
}
```

Cool! Now we can do this:

```bash
> var { items } = require('./calculator')
> var Calculator = require('./calculator').default
> var calculator = new Calculator(items)
> calculator.calculate()
-> [ 45.45, 1.876 ]
> calculator.printReceipt()
->
10
22
13.45
------------------------------
Sub-Total: 45.45
==============================
Tax: 1.876
==============================
Total: 47.326
```

Cool! We've wrapped up all of that functionality into a class.

## Moving on
That's it for definitions and inheritance! Let's see how we can use getters,
setters, and access the base class.
