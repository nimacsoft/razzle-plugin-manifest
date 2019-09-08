[![npm version](https://badge.fury.io/js/razzle-plugin-manifest.svg)](https://badge.fury.io/js/razzle-plugin-manifest)

# razzle-plugin-manifest

This package contains a plugin to group route level chunk files with Razzle

## Output

```javascript
{
  "ChunkName": {
    "css": [
      "path/to/chunk.css"
    ],
    "js": [
      "path/to/chunk.js"
    ]
  },
  "OtherChunk": {
    "css": [
      "path/to/OtherChunk.css"
    ],
    "js": [
      "path/to/OtherChunk.js"
    ]
  },
  "client": {
    "css": [
      "path/to/bundle.css"
    ],
    "js": [
      "path/to/client.js"
    ]
  }
}
```

Usage in Razzle Projects

```sh
yarn add razzle-plugin-manifest --dev
```

create a **razzle.config.js** file in root directory of project (next to the _package.json_) and put this content inside it

Using the plugin with the default options

```javascript
// razzle.config.js

module.exports = {
  plugins: ["manifest"]
};
```

## With custom options:

```javascript
// razzle.config.js

module.exports = {
  plugins: [
    {
      name: "manifest",
      options: {
        filePath: "./../manifest"
      }
    }
  ]
};
```

## Options

filePath: _boolean_ (defaults: ./../manifest)

Change `filePath` if you want razzle change output filename and directory.
