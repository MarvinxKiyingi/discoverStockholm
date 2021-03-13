# Discover Stockholm

This project is for a group assignment

## Getting started

Clone the repo and install the dependencies before opening index.html:

```
git clone
```

```
npm install
```

And every time you make any change to scss you have to type in this command in the terminal to compile it into css

```
gulp
```

## Folder struture

```
index.html
├── assets
├── css
├── js
├── node_modules
│   └── modules
├── scss
│   └── variables
```

New files should be put in a corresponding folder. Use assets for files that do not have any corresponding folder.

## Naming conventions

HTML classes and ids should be using lowercase with hyphens when using multiple words:

```
<label class="menu-icon" for="menu-btn">
```

JS variables and function names use camelCase. PascalCase is used for class names.

Longer and describing variable names and functions are preferred, such as:

```
let cartItems;
```

or

```
changeProductAmount();
```
