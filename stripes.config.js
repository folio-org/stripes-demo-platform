module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
  },
  modules: {
    '@folio/users': {},
    '@folio/items': {},
    '@folio/checkin': {},
    '@folio/checkout': {},
    '@folio/organization': {},
    '@folio/developer': {},
    '@folio/plugin-markdown-editor': {},
    '@folio/plugin-markdown-better': {},
    '@folio/plugin-find-user': {},
  }
};
