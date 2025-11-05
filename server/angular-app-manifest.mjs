
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://gasanaps8.github.io/Portofolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portofolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1483, hash: '2d1c09e65f5922f1401f4fd86faba322ea633b3e63fbe43274252a86bdd5c32d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1045, hash: 'ff80888dbfdcc2b1f3ea0775df26007ead9dfb449216e3fc56ebe23dc88de843', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27515, hash: 'c1aec3039426720fe8698e20ab6b90d70edf8e06c4d4fe4ff996c675a2bbe9c4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OSVABIVA.css': {size: 845, hash: 'BtoEvBQ1Iss', text: () => import('./assets-chunks/styles-OSVABIVA_css.mjs').then(m => m.default)}
  },
};
