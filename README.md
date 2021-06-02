# wings-js
Fast web framework for Node js

![](https://img.shields.io/github/languages/count/imagineeeinc/wings-js)
![](https://img.shields.io/github/languages/top/imagineeeinc/wings-js)
![](https://img.shields.io/badge/Eureka_Server-not%20connected-red)
![](https://img.shields.io/bundlephobia/min/@imagineee/wing-js)
![](https://img.shields.io/github/languages/code-size/imagineeeinc/wings-js)
![](https://img.shields.io/github/repo-size/imagineeeinc/wings-js)
![](https://img.shields.io/github/size/imagineeeinc/wings-js/wing.min.js)
![](https://img.shields.io/tokei/lines/github/imagineeeinc/wings-js)
![](https://img.shields.io/npm/dm/@imagineee/wing-js)
![](https://img.shields.io/github/license/imagineeeinc/wings-js)
![](https://img.shields.io/npm/v/@imagineee/wing-js)

```js
const wings = require("@imagineee/wing-js")
var app = new wings.server()

app.listen(3000, () => console.log("running on port 3000"))

app.use('files', '/public')

app.onGet("/", (ctx) => {
    ctx.res.send("hi")
})
app.onGet("/html", (ctx) => {
    ctx.res.sendFile('./public/index.html')
})
```

# Installation
This is a Node.js module available through the npm registry.

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

If this is a brand new project, make sure to create a package.json first with the npm init command.

Installation is done using the npm install command:
```bash
$ npm i @imagineee/wing-js
```

# Features
- Small: ![](https://img.shields.io/bundlephobia/min/@imagineee/wing-js)
- Easy syntax
- Fast to setup
- More coming soon!

# Philosophy
Wings is meant to be small, easy and fast out of the box with every thing provided.

# Docs
To get started, import the module in your app after installation
```js
const wings = require("@imagineee/wing-js")
```
## API
 - ``new server()``
to make a new server add:
```js
var app = new wings.server()
```

- ``listen(port, callback)``
to start a server or listen on a port
  - port [integer]: the port to listen on
  - callback [function]: what to do when succeeded
 
__example__
```js
app.listen(3000, () => console.log("running on port 3000"))
```

- ``onGet('path', callback)``
to respond on a reqest on a path
  - path [string]: the path
  - callback [function]: what to do affter reciving a request

__example__
```js
app.onGet("/", (ctx) => {
    ctx.res.send("hi")
})
```
