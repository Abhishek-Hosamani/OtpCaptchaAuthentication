const express = require('express');
const https = require('https')
const path = require('path');
const app = express();
const fs = require('fs')

app.use(express.static(path.join(__dirname, 'public')))


const applicn = require("./app");
const port = process.env.PORT || 3000;



const sslserver = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, applicn)

sslserver.listen(3443, () => console.log('Secure Server On port 3443'))
// applicn.listen(port, () => console.log(`captcha-api listening on ${port}!`));