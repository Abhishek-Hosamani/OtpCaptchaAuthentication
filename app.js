const captcha = require("./captcha");
const express = require("express");
const app = express();
const twilio = require('twilio');
const accountSid = 'AC38143c2e07dae337c0ee3a6cbdb6ccdc';
const authToken = '52c3d06843e11a2314b9e091e47164a4';
const client = new twilio(accountSid, authToken);

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}


app.get('/test', (req, res) => {
    // const width = 200;
    // const height = 100;
    // const { image } = captcha(width, height);
    // const phoneNumber = '+91 6362197359';
    // const otp = generateOTP();


    // client.messages.create({
    //     body: `Your OTP is: ${otp}`,
    //     to: phoneNumber,
    //     from: '+1 720 466 7552' // Your Twilio phone number
    // })
    //     .then(message => {
    //         console.log(`OTP sent to ${phoneNumber}: ${message.sid}`);

    //     })
    //     .catch(error => {
    //         console.error(`Error sending OTP: ${error.message}`);

    //     });
    res.send("Hii")
    // res.render('form.ejs', { image });
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