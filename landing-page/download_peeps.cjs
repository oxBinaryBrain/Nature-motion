const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'peeps');
fs.mkdirSync(dir, { recursive: true });

const file = fs.createWriteStream(path.join(dir, 'all-peeps.png'));
https.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/peeps.png', (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log("Download complete");
  });
}).on('error', (err) => {
  fs.unlink(path.join(dir, 'all-peeps.png'));
  console.error("Error: ", err.message);
});
