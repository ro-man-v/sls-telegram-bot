const https = require('https');
const { token, endpoint } = require('../config.js').configuration.PRODUCTION;
https.get(`https://api.telegram.org/bot${token}/deleteWebhook?url=${endpoint}`, res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log(JSON.parse(data).description);
  }).on('error', e => console.log('Error: ' + e.message));
});
