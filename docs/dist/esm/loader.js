import { p as promiseResolve, b as bootstrapLazy } from './index-23ca216f.js';
export { s as setNonce } from './index-23ca216f.js';

/*
 Stencil Client Patch Esm v3.3.1 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["hallo-name",[[1,"hallo-name",{"vorname":[1],"nachname":[1]}]]]], options);
  });
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map