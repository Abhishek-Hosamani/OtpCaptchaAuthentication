const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
// app.use((req, res) => {
//     console.log("We got a request")
//     // res.send("Hello We got req and this is response")

// })


// app.get('/cats', (req, res) => {
//     res.send('CAT Request !!');
// })

// app.get('/r/:subreddit/:postid', (req, res) => {
//     const { subreddit, postid } = req.params;
//     // res.send('this is a subreddit');
//     res.send(Browsing the ${subreddit} subreddit for ${postid})
// })
// app.get('/', (req, res) => {
//     res.send('Home !!');
// })
// app.get('/dogs', (req, res) => {
//     res.send('Dogs Request !!')
// })
// app.get('/search', (req, res) => {
//     console.log(req.query);
//     res.send('Hdfg')
// })
// // /cats=> 'meow'
// // /dogs=>'woof'
// // /=> home

// app.post('/cats', (req, res) => {
//     res.send('This IS Post Request different than Get')
// })

// app.get('*', (req, res) => {
//     res.send('PLease enter Corect URl')
// })
// ----------------Templating-------------------
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/views'))


// app.get('/', (req, res) => {
//     res.render('home.ejs')
// })

// app.get('/rand', (req, res) => {
//     let num = Math.floor(Math.random() * 10) + 1;

//     res.render('random', { num })
// })

// app.get('/r/:subreddit/:post', (req, res) => {
//     const { subreddit, post } = req.params;
//     console.log(req.params)
//     res.render('subreddit', { subreddit, post })
// })

// app.get('/cats', (req, res) => {
//     console.log(req.url)
//     const cats = ['rocky', 'monty', 'stephanie', 'Mills', 'Scissors', 'Shadow'];
//     // res.render('cats', { cats })
// })






// app.listen(3000, () => {
//     console.log('Listening on Port 3000')
// })

const applicn = require("./app");
const port = process.env.PORT || 3000;

applicn.listen(port, () => console.log(`captcha-api listening on ${port}!`));