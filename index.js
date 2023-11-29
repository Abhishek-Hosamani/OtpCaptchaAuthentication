const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))


const applicn = require("./app");
const port = process.env.PORT || 3000;

applicn.listen(port, () => console.log(`captcha-api listening on ${port}!`));