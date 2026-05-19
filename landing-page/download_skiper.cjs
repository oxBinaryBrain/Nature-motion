const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream("public/images/peeps/all-peeps.png");
const options = {
  hostname: 'skiper-ui.com',
  path: '/images/peeps/all-peeps.png',
  headers: { 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};

https.get(options, (res) => {
  if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
    https.get(res.headers.location, (redirectRes) => {
      redirectRes.pipe(file);
    });
  } else {
    res.pipe(file);
  }
  
  file.on('finish', () => {
    console.log("Done");
  });
});
