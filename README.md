<h1 align="center"> Queen`s Attack </h1> <br>

<p align="center">
  <a href="">
    <img alt="example" title="example" src="https://s3.amazonaws.com/hr-challenge-images/0/1485426500-a4039ebb00-chess1.png" width="350px">
  </a>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Stack of Technology](#stack)
- [Build Process](#build-process)
- [Some Configuration](#configuration)
- [Start the project](#start)

## Introduction

In game theory, it is important to know the number of squares a piece is able to be moved, without encountering other pieces.
The queen is the piece which has the most complete set of movement and covers the movement of other pieces, except for the Knight.
A graphical tool for this would help setting up scenarios to study.

## Stack of Technology

Here you can find information related to the technology used in FE:

* REACT v.16
* BEM
* JS
* ECMAScript 6
* Git hub
* Jest
* Enzyme
* Eslint
* Stylus

## Build Process

- Clone or download the repo [queens-attack](git@github.com:tatelloGbnt/queens-attack.git)
- `node` download latest version of node  [Node.js](https://nodejs.org/es/)
- `npm` download latest version of node  [NPM.js](https://www.npmjs.com/get-npm)
- `npm install` to install dependencies
- `npm start` to run the project

**Note: _Install and Configure Stylus_**

**Install Stylus**

1.- Install stylus globaly:

```npm install create-react-app-stylus --save-dev```

2.- Replace your `start`, `watch` and `build` scripts in your package.json.

3.- Create `static/stylus` folder

<p align="center">
  <a href="">
    <img alt="example" title="example" src="https://carbon.now.sh/?bg=rgba(171%2C184%2C195%2C0)&t=dracula&wt=none&l=application%2Fjson&ds=false&dsyoff=20px&dsblur=68px&wc=false&wa=false&pv=56px&ph=0px&ln=false&fl=1&fm=Droid%20Sans%20Mono&fs=18px&lh=160%25&si=false&es=2x&wm=false&code=%2520%2520%2522scripts%2522%253A%2520%257B%250A%2520%2520%2520%2520%2522build-css%2522%253A%2520%2522stylus%2520-c%2520src%252F***%252F**%252F*.styl%2520--out%2520src%252Fstatic%252Fcss%2522%252C%250A%2520%2520%2520%2520%2522watch-css%2522%253A%2520%2522npm%2520run%2520build-css%2520%2526%2526%2520stylus%2520-c%2520-w%2520src%252F***%252F**%252F*.styl%2520--out%2520src%252Fstatic%252Fcss%2522%252C%250A%2520%2520%2520%2520%2522start-js%2522%253A%2520%2522react-scripts%2520start%2522%252C%250A%2520%2520%2520%2520%2522start%2522%253A%2520%2522npm-run-all%2520-p%2520watch-css%2520start-js%2522%252C%250A%2520%2520%2520%2520%2522build-js%2522%253A%2520%2522react-scripts%2520build%2522%252C%250A%2520%2520%2520%2520%2522build%2522%253A%2520%2522npm-run-all%2520build-css%2520build-js%2522%252C%250A%2520%2520%2520%2520%2522test%2522%253A%2520%2522react-scripts%2520test%2522%252C%250A%2520%2520%2520%2520%2522eject%2522%253A%2520%2522react-scripts%2520eject%2522%250A%2520%2520%257D%252C" width="450">
  </a>
</p>

4.- Execute ```npm start``` to compile the instructions

5.- It  Generate ```css``` folder containing all the .css files within your project

<p align="center">
  <a href="">
    <img alt="example" title="example" src="https://carbon.now.sh/?bg=rgba(171%2C184%2C195%2C0)&t=dracula&wt=none&l=application%2Fjson&ds=false&dsyoff=20px&dsblur=68px&wc=false&wa=false&pv=56px&ph=0px&ln=false&fl=1&fm=Droid%20Sans%20Mono&fs=18px&lh=160%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Static%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257C-----css%252F%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257C-----stylus%252F%250A" width="300">
  </a>
</p>

6.- Import your `main.css` class to `index.js`:  `import './static/css/main.css`

## Some Configuration

**Eslint configuration**
Follow the next documentation to major knowledge [Eslint-rules](https://eslint.org/docs/rules/).

In this feature we configure some rules to have the best practices when we write code in  ESC 6/7, REACT
Some examples:

* Indent with 2 spaces
* Use single quotes rather double quotes
* Delete extra space
* Use correct spaces between {} () arrow function etc...
* order imports by relative and absolute imports

**Stylus Documentation**
Follow the next documentation to major knowledge [Stylus](https://stylus-lang.com/).

**BEM Documentation**
Follow the next documentation to major knowledge [BEM](http://getbem.com/introduction/).



## Start the project

To start the project  run: 

`npm start`

:+1: You can see in: [local](http://localhost:3000/)
