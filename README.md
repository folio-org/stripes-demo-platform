# stripes-demo-platform

This is the Stripes platform used for building the demo site at http://folio-uidemo.aws.indexdata.com/

To download, build and run:
```
$ git clone https://github.com/folio-org/stripes-demo-platform
$ cd stripes-demo-platform/
$ yarn install
$ yarn start
```
Then point your browser at http://localhost:3000/

The Trivial UI module should then Just Work; the Users and Items UI modules will only work if you have a suitably configured Okapi and set of services running on port 9130. One easy way to provide these is using the `folio-backend-auth` virtual machine, as described in the *Quick Start* section of [the folio-ansible README](https://github.com/folio-org/folio-ansible/blob/master/README.md)

See also [stripes-sample-platform](https://github.com/folio-org/stripes-sample-platform).
