# Lesson 3.3 - Parameter Handling in the Real World

So far in this lesson we have learned some great new ES2015 features that
have everything to do with parameter handling. Let's write a little bit of code
so that we can see how this might help us in the real world.

We're going to create a receipt calculator function that leverages these features.

Let's go ahead and move into the directory that we established in the first
lesson where we're going to hold all of our code for this tutorial and create
a file called `calculator.js`. Once this is created go ahead and open it in your
favorite text editor.

Let's start by defining some sample data that we can export for easy testing
in the console:

```js
export const items = [
  { price: 10, taxable: true },
  { price: 22, taxable: false },
  { price: 13.45, taxable: true }
]
```

Great! We've set up a simple data structure here that holds a list of items
that somebody is purchasing. Each of these items includes the cost of the
item (price) and whether or not the item is taxable.

Next we'll go ahead and start creating our function. Let's start with the
shell of the function:

```js
export function calculate() {

}
```

Now we've got a basic function, but unfortunately it doesn't do anything. Let's
start by adding some parameters. There's a few things this function will need
to know in order to be useful. The first thing it's going to need to know is
the rate at which to apply tax to a particular item. Let's add that in, and
give it a default value:

```js
export function calculate(taxRate = 8) {

}
```

Ok great, but we're going to need more. We also need to have a list of items
to iterate through in order to calculate the total. Let's add that as the
items variable:

```js
export function calculate(taxRate = 8, items = []) {

}
```

Awesome! Now we've got a function that takes two arguments, and they both have
defaults, so we know they will always be defined! Let's write the meat of the
function now:

```js
export function calculate(taxRate = 8, items = []) {
  let total = 0;

  items.forEach(function(item) {
    if (item.taxable) {
      total += item.value + (item.value * taxRate / 100);
    } else {
      total += item.value;
    }
  })

  return total;
}
```

Ok that looks like it will work, but I think we should leverage the `math`
module that we created in the last lesson to make this easier! Let's import it
and put it to work:

```js
import { calculateTax } from './math';
```

Ok it's imported, now let's use it:

```js
export function calculate(taxRate = 8, items = []) {
  let total = 0;

  items.forEach(function(item) {
    total += item.price + calculateTax(item.price, taxRate, item.taxable);
  })

  return total;
}
```

Great! We've now got a function that we can use to calculate a total from a
list of items. Let's open up the REPL and try it out!

```bash
$ babel-node
> var { items, calculate } = require('./calculate')
> calculate(8, items)
-> 47.32599999999999
```

Cool! But wait a minute, what happens when we omit the `taxRate` variable?

```bash
> calculate(items)
-> 0
```

Uh oh! What happened there? Unfortunately, because we are using `positional`
arguments here, we can't omit the first `taxRate` variable and also include
the `items` variable. When we omit the `taxRate` variable, the `items` variable
now becomes the tax rate! Well this doesn't make having default values for
parameters very useful now does it? We can get around this by using a JavaScript
object in the function, along with some crafty destructuring assignment. We're
also going to modify our `taxedPrice` function in the math module to use this
feature. Let's take a look:

`math.js`
```js
export function calculateTax({ price, taxRate, taxable }) {
  ...
}
```

`calculator.js`
```js
export function calculate({ taxRate = 8, items = [] }) {
  let total = 0;

  items.forEach(function(item) {
    total += item.price + calculateTax({ taxRate, ...item });
  })

  return total;
}
```

So what happened there? The first thing we did was pretty simple. For both
functions we added curly braces to the functions arguments. By using a
combination of default parameter values and destructuring we are now able to
pass in only a list of items and still get the default tax rate. This is because we
are no longer using positional arguments and are able to use object keys to
reference variables.

You'll notice the second thing we did was change how we were passing arguments
into the `taxedPrice` function. What we're doing here is using the spread
operator to assign all of the values of the `item` object to the object that
we are passing into the `taxedPrice` function! Now we just need to change the
way we call the function in the REPL:

```bash
> calculate({ items })
-> 47.32599999999999
```

Awesome! We were able to fix our problem using destructuring and enhanced
parameter handling! ES2015 is looking really great so far! If you were
wondering about the function call:

```bash
> calculate({ items })
```

Using our new found ES2015 superpowers, we are able to not only destructure
objects using that syntax, but we can also structure objects using the same
syntax. What you see above is exactly the same as: `{ items: items }`. Because
our variable name is the *same* as the name of the key we want in the object
we can assign it this way. It's just a convenient shorthand.

## Moving On....

We learned a great deal in this lesson about all the great new ways to handle
parameters, variables, and objects using ES2015. Let's move on and see how
arrow functions can make our lives easier!
