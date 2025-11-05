
export default {
  basePath: 'https://gasanaps8.github.io/Portofolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
