# Front-end Boilerplate using Sass and Gulp 4

Using a set of boilerplate files when I'm starting a website project can be a huge time-saver. Instead of having to start from scratch or copy and paste from previous projects, this can get me up and running in just a minute or two.

Boilerplate for simple front-end websites that uses HTML, SCSS, and JavaScript. This is using Gulp 4 to compile, prefix, and minify the files.

Walk through for this from coder coder - [here](https://coder-coder.com/gulp-4-walk-through).
Trello guide I made for myself - [here](https://trello.com/b/ipYXBFNK/gulp-4-crash-course-webapp-step-1-coder-coder-youtube-series).

## Quickstart guide

* Clone or download this Git repo onto your computer.
* Install [Node.js](https://nodejs.org/en/) if you don't have it yet.
* Run `npm install`
* Run `gulp` to run the default Gulp task

In this proejct, Gulp is configured to run the following functions:

* Compile the SCSS files to CSS
* Autoprefix and minify the CSS file
* Concatenate the JS files
* Uglify the JS files
* Move final CSS and JS files to the `/dist` folder
