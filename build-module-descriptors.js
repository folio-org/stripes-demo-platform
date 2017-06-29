const fs = require('fs');
const child_process = require('child_process');

const argv0 = process.argv[1];
const indir = 'node_modules/@folio';
const outdir = 'ModuleDescriptors';

console.log('* build-module-descriptors');
if (!fs.existsSync(outdir)){
  fs.mkdirSync(outdir);
}

fs.readdir(indir, function(err, filenames) {
  if (err) {
    console.log(`${argv0}: cannot scan '${err.path}': ${err.message}`);
    process.exit(1);
  }

  filenames = filenames.sort();
  for (var i = 0; i < filenames.length; i++) {
    const filename = filenames[i];
    if (filename.startsWith('stripes-')) continue;
    console.log(`processing '${filename}'`);

    const cmd = `node ${indir}/stripes-core/util/package2md.js ${indir}/${filename}/package.json > ${outdir}/${filename}.json`;
    try {
      const buffer = child_process.execSync(cmd);
      const output = buffer.toString();
      if (output) console.log(`'${cmd}' produced unexpected output: '${output}'`);
    } catch (err) {
      console.log(`${argv0}: cannot run '${cmd}':`, err);
      process.exit(2);
    }
  }
});
