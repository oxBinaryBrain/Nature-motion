const https = require('https');
https.get('https://codepen.io/zadvorsky/pen/xxwbBQV.js', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const match = data.match(/https:\/\/[^\s'"]+\.png/);
    if(match) console.log("FOUND:", match[0]);
    else console.log("Not found.");
  });
});
