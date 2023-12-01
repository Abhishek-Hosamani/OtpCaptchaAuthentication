const captcha = require("./captcha");
const express = require("express");
const app = express();
const twilio = require('twilio');
const accountSid = 'AC38143c2e07dae337c0ee3a6cbdb6ccdc';
const authToken = '7220aacceb319a5ba99aa0b688d2fa44';
const client = new twilio(accountSid, authToken);

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}


app.get('/', (req, res) => {
    res.send('This is IS app')
})

app.get('/getcaptcha', (req, res) => {
    const { image } = captcha(200, 100);

    res.send(image);
})
app.get('/getotp', (req, res) => {
    const mobile = parseInt(req.query.mobileNumber);
    console.log(mobile);

    const phoneNumber = `+91 ${mobile}`;
    const otp = generateOTP();


    client.messages.create({
        body: `Your OTP is: ${otp}`,
        to: phoneNumber,
        from: '+1 720 466 7552' // Your Twilio phone number
    })
        .then(message => {
            console.log(`OTP sent to ${phoneNumber}: ${message.sid}`);


        })
        .catch(error => {
            console.error(`Error sending OTP: ${error.message}`);


        });

    res.send('ok')

})
app.get('/test', (req, res) => {
    const width = 200;
    const height = 100;
    const { image } = captcha(width, height);


    res.render('form.ejs', { image });
});

// Captcha generation, returns PNG data URL and validation text
app.get("/captcha/:width?/:height?/", (req, res) => {
    const width = parseInt(req.params.width) || 200;
    const height = parseInt(req.params.height) || 100;
    const { image, text } = captcha(width, height);
    res.send({ image, text });
    // res.render('form.ejs');
});

module.exports = app;