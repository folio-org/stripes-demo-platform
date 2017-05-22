module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
  },
  modules: {
    '@folio/users': {},
    '@folio/items': {},
    '@folio/scan': {},
    '@folio/organization': {},
    '@folio/plugin-markdown-editor': {},
    '@folio/plugin-markdown-better': {},
  }
};
