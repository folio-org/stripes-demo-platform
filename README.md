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

The Trivial UI module should then Just Work.

The other UI modules will only work if you have a suitably configured Okapi and set of services running on port 9130. One easy way to provide these is using a pre-built FOLIO Vagrant box, as described in the *Quick Start* section of [the folio-ansible README](https://github.com/folio-org/folio-ansible/blob/master/README.md).

For the other modules, you will also need to POST module descriptors and tenant associations to Okapi to ensure interface compatibility and generate appropriate permission sets. Module descriptors for each module are generated by `yarn install` in the `ModuleDescriptors` subdirectory. These files can be POSTed to Okapi with curl, like so:
```
$ curl -w '\n' -X POST -D - \
  -H "Content-type: application/json" \
  -d @users.json \
  http://localhost:9130/_/proxy/modules
```
A tenant association is a simple JSON structure with the module service ID, found in the `id` key of the module descriptor. So to create a tenant association file, you might do something like:
```
$ cat > users_tenant.json <<EOF
{"id":"folio_users-2.7.0"}
EOF
```
Then POST the files for your tenant. In the prebuilt FOLIO Vagrant boxes, the sample tenant ID is `diku`:
```
$ curl -w '\n' -X POST -D - \
  -H "Content-type: application/json" \
  -d @users_tenant.json \
  http://localhost:9130/_/proxy/tenants/diku/modules
```
For more details on module descriptors, tenant associations, and working with Okapi, see the [Okapi Guide and Reference](https://github.com/folio-org/okapi/blob/master/doc/guide.md).

See also [stripes-sample-platform](https://github.com/folio-org/stripes-sample-platform).
