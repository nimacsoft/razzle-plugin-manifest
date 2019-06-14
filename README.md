[![npm version](https://badge.fury.io/js/razzle-plugin-manifest.svg)](https://badge.fury.io/js/razzle-plugin-manifest)

# razzle-plugin-manifest
This package contains a plugin to group route level chunk files with Razzle

Usage in Razzle Projects
```sh
yarn add razzle-plugin-manifest --dev
```

create a **razzle.config.js** file in root directory of project (next to the *package.json*) and put this content inside it

Using the plugin with the default options
```javascript
// razzle.config.js

module.exports = {
  plugins: ['manifest'],
};
```

## With custom options:

```javascript
// razzle.config.js

module.exports = {
  plugins: [
    {
      name: 'manifest',
      options: {
        filePath: './../manifest'
      }
    }
  ]
};
```

## Options
filePath: *boolean* (defaults: ./../manifest)

Change `filePath` if you want razzle change output filename and directory.