# Lesson 1.2 - Tools of the Trade

## Text Editor

You're going to need a basic text editor for this course to follow along with
some of the code samples. These days I prefer Vim, but there are a lot of
great choices out there:

  * [Atom](https://atom.io/) - A great free choice built by GitHub
  * [Sublime Text](https://www.sublimetext.com/) - Anouther great choice, similar to Atom, but not 100% free
  * [Webstorm](https://www.jetbrains.com/webstorm/) - A full blown JavaScript IDE, but it comes at a price.

THe most important thing here is that you use a text editor that you are
comfortable with.

## Node and npm

The next thing we're going to need to have installed is Node and npm. Luckily,
npm comes bundled with Node when installed from the Node website. If you don't
already have it, let's go ahead and install the latest version of Node right
now.

Everything you need is available on the [NodeJS](https://nodejs.org/en/download/)
website. If you're using Mac or Windows, you're in luck, as there are installers
for both platforms. Just make sure you click on the "Stable" button before
downloading to ensure that you're getting the latest stable version.

If you're using Linux, you can download the Linux binaries. Installing
from the binaries is fairly straightforward:

```bash
$ wget https://nodejs.org/dist/v5.7.1/node-v5.7.1-linux-x64.tar.xz
$ tar xzf node-v5.7.1-linux-x64.tar.xz
$ sudo cp -rp node-v5.7.1-linux-x64 /usr/local/
$ sudo ln -s /usr/local/node-v5.7.1-linux-x64 /usr/local/node
```

## Babel

In order to take advantage of all of the new ES2015 features we're going to
use the Babel CLI to run our Node REPL, and to run our scripts.

You may be wondering what the heck a Node REPL is right now. REPL stands for
Read-Eval-Print-Loop. It is simply an interactive environment for writing
and testing code for a computer language.

Let's go ahead and install the Babel CLI now that we have Node and npm
installed:

```bash
$ npm install -g babel-cli
```

We're using the `-g` flag to tell npm to install this package globally so
that we will have access to the CLI commands everywhere.

Normally we would use the `node` command to enter into a Node REPL, but
because we want to take advantage of all of the newest ES2015 features, we're
going to be using the `babel-node` command. This was installed when we
installed the Babel CLI. If you're able to type in `babel-node` without any
errors you're ready to move on to the next lesson!

In order to use all of the ES2015 features available to us, we're going to
need to install the ES2015 presets module. I would recommend creating a
directory somewhere so that we can install the preset module and be able
to access it in our code samples and when loading the `babel-node` REPL. So
go ahead and create that directory and `cd` into it and install the ES2015
presets module:

```bash
$ npm install babel-preset-es2015 babel-preset-stage-0
```

We could include these presets every time we start the REPL like this:

```bash
$ babel-node --presets es2015 stage-0
```

But it's much easier to create a `.babelrc` file to handle this for us! Let's
go ahead and do that in the root of your code directory that we created.

```json
{
  presets: [
    'es2015',
    'stage-0'
  ]
}
```

## Next Lesson

Now that we've installed everything we need we can move on to actually
writing some code and learning a few things about ES2015!
