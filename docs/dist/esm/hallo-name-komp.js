import { p as promiseResolve, b as bootstrapLazy } from './index-23ca216f.js';
export { s as setNonce } from './index-23ca216f.js';

/*
 Stencil Client Patch Browser v3.3.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["hallo-name",[[1,"hallo-name",{"vorname":[1],"nachname":[1]}]]]], options);
});

//# sourceMappingURL=hallo-name-komp.js.map