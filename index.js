const ManifestPlugin = require('webpack-manifest-plugin');

const defaultOptions = {
  filePath: './../manifest',
};

function modify(baseConfig, { target, dev }, webpack, userOptions = {}) {
  const config = Object.assign({}, baseConfig);
  const options = Object.assign({}, defaultOptions, userOptions);

  if (target === 'web') {
    config.plugins.push(
      // based on https://github.com/danethurber/webpack-manifest-plugin/issues/181#issuecomment-467907737
      new ManifestPlugin({
        fileName: options.filePath.concat('.json'),
        writeToFileEmit: true,
        filter: item => item.isChunk,
        generate: (seed, files) => {
          const entrypoints = new Set();
          files.forEach(file =>
            ((file.chunk || {})._groups || []).forEach(group =>
              entrypoints.add(group)
            )
          );
          const entries = [...entrypoints];
          const entryArrayManifest = entries.reduce((acc, entry) => {
            const name =
              (entry.options || {}).name || (entry.runtimeChunk || {}).name;
            const files = []
              .concat(
                ...(entry.chunks || []).map(chunk =>
                  chunk.files.map(item => `/${item}`)
                )
              )
              .filter(Boolean);

            const cssFiles = files
              .map(item => (item.indexOf('.css') !== -1 ? item : null))
              .filter(Boolean);

            const jsFiles = files
              .map(item => (item.indexOf('.js') !== -1 ? item : null))
              .filter(Boolean);

            return name
              ? {
                  ...acc,
                  [name]: {
                    css: cssFiles,
                    js: jsFiles,
                  },
                }
              : acc;
          }, seed);
          return entryArrayManifest;
        },
      })
    );
  }

  return config;
}

module.exports = modify;
