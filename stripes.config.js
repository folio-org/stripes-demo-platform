module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    logCategories: 'core,connect,redux,path,action'
  },
  modules: {
    '@folio/trivial': {},
    '@folio/users': {},
    '@folio/items': {},
    '@folio/scan': {}
  }
};
