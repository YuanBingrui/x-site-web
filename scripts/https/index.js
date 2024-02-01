const {join} = require('node:path');
const {statSync, mkdirSync, writeFileSync} = require('node:fs');

function getCertificate() {
  const keyPemPath = join(__dirname, 'localhost_key.pem');
  const certPemPath = join(__dirname, 'localhost_cert.pem');
  try {
    const stat = statSync(certPemPath);
    if (Date.now() - stat.ctime.valueOf() > 30 * 24 * 60 * 60 * 1000) {
      throw new Error('pem files are expired.');
    }
  } catch (error) {
    const {createCertificate} = require('./certificate.js');
    const {keyPem, certPem} = createCertificate();
    mkdirSync(__dirname, {recursive: true});
    writeFileSync(keyPemPath, keyPem);
    writeFileSync(certPemPath, certPem);
    console.log('certificates are created');
  }
}

getCertificate();
