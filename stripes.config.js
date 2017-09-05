module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
  },
  modules: {
    '@folio/users': {},
    '@folio/items': {},
    '@folio/checkout': {},
    '@folio/checkin': {},
    '@folio/organization': {},
    '@folio/circulation': {},
    '@folio/developer': {},
    '@folio/plugin-markdown-editor': {},
    '@folio/plugin-markdown-better': {},
    '@folio/plugin-find-user': {},
  }
};
