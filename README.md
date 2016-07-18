# The Official Website of Lab μ

&copy; 2014-2016 [Lab μ](http://lab.mu).


## Development Guide
This website is developed using the [Gulp Building System](http://gulpjs.com/) and
[Bower Package Manager](http://bower.io/), which is based on [Node.js](https://nodejs.org).

We use [Swig Template Engine](http://paularmstrong.github.io/swig/). All *.html file is
Swig template. View the documentation before you start developing.

### Environment
First install Node.js. Any version beyond 0.12.0 is supported (but the latest version is
encouraged). Make nodejs and npm is in your system path (which is automatically configured by
the installer by default, or you can make it your self).

Then run
```bash
$ npm install -g gulp-cli
$ npm install -g bower
```
to install gulp and bower.

### Preparation
```bash
$ npm install
$ bower install
```
to install all development dependencies and used library.

### Preview
```bash
$ gulp serve
```
it automatically open your default browser to the index.

Changes on files is automatically reloaded.

### Release
```bash
$ gulp
```
and checkout the pages in *dest* directory.
