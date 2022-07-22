const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: {
              modifyVars: { '@primary-color': 'red' },
            //   modifyVars: {
            //     hack: `true;@import "${require.resolve('./src/theme.less')}";`
            //   },
                javascriptEnabled: true,
            },
          },
        },
      },
    ],
  };