---
layout: ../../layouts/markdown.astro
title: Javascript Examples
author: Seth Burkart
description: View all of the Javascript examples!
tags: astro, javascript
---

# The `script` Tag

In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.

**Example**

```html
<script>
  document.getElementById("demo").innerHTML = "My First JavaScript";
</script>
```

### JavaScript in `head`

In this example, a JavaScript function is placed in the `head` section of an HTML page. The function is invoked (called) when a button is clicked:

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    </script>
  </head>
  <body>
    <h2>Demo JavaScript in Head</h2>

    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
  </body>
</html>
```

### JavaScript in `body`

In this example, a JavaScript function is placed in the `body` section of an HTML page. The function is invoked (called) when a button is clicked:

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Demo JavaScript in Body</h2>

    <p id="demo">A Paragraph</p>

    <button type="button" onclick="myFunction()">Try it</button>

    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    </script>
  </body>
</html>
```

Placing scripts at the bottom of the `body` element improves the display speed because script interpretation slows down the display.

## External JavaScript

Scripts can also be placed in external files:

External file: `myScript.js`

javascript

```javascript
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
```

**Example**

```html
<script src="myScript.js"></script>
```

You can place an external script reference in `head` or `body` as you like.

## External References

```html
<script src="https://www.w3schools.com/js/myScript.js"></script>
```

## Inner HTML

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Web Page</h1>
    <p>My First Paragraph</p>
    <p id="demo"></p>
    <script>
      document.getElementById("demo").innerHTML = 5 + 6;
    </script>
  </body>
</html>
```

## Document.write()

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Web Page</h1>
    <p>My First Paragraph</p>
    <script>
      document.write(5 + 6);
    </script>
  </body>
</html>
```

## Window.alert()

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Web Page</h1>
    <p>My First Paragraph</p>
    <script>
      window.alert(5 + 6);
    </script>
  </body>
</html>
```

<button class="bg-blue-500 hover:bg-blue-500/0 py-1 px-4 rounded-lg text-white" onClick="window.alert(5 + 6)">Try Me!</button>

## Console.log()

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Web Page</h1>
    <p>My First Paragraph</p>
    <script>
      console.log(5 + 6);
    </script>
  </body>
</html>
```

## Javascript print

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Web Page</h1>
    <p>My First Paragraph</p>
    <script>
      console.log(5 + 6);
    </script>
  </body>
</html>
```

# Javascript Statements

```js
let x, y, z; // Statement 1
x = 5; // Statement 2
y = 6; // Statement 3
z = x + y; // Statement 4
```

```js
document.getElementById("demo").innerHTML = "Hello Dolly.";
```

<div id="demo" class="text-white text-xl py-4">I am the demo</div>
<button class="bg-blue-500 hover:bg-blue-500/0 py-1 px-4 rounded-lg text-white" onClick="document.getElementById(`demo`).innerHTML = 'Hello Dolly.'">Try Me!</button>

## Semicolens

```js
let x = 5;
let y = 6;

// or on the same line
let x = 5;
let y = 6;
```

## Whitespace

```js
let person = "Hege";
let person = "Hege";
```

All do the same thing, but the good practice is:

```js
let x = y + z;
```

## Line Breaks

```js
document.getElementById("demo").innerHTML = "Hello Dolly!";
```

Works the same way!

<div id="demo2" class="text-white text-xl py-4">I am the demo</div>
<button class="bg-blue-500 hover:bg-blue-500/0 py-1 px-4 rounded-lg text-white" onClick="document.getElementById(`demo2`).innerHTML = 'Hello Dolly.'">Try Me!</button>

## Functions

```js
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
```

| Keyword  | Description                                                   |
| -------- | ------------------------------------------------------------- |
| var      | Declares a variable                                           |
| let      | Declares a block variable                                     |
| const    | Declares a block constant                                     |
| if       | Marks a block of statements to be executed on a condition     |
| switch   | Marks a block of statements to be executed in different cases |
| for      | Marks a block of statements to be executed in a loop          |
| function | Declares a function                                           |
| return   | Exits a function                                              |
| try      | Implements error handling to a block of statements            |
