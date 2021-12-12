const express = require('express')
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');

const app = express();

app.use(cors({"Access-Control-Allow-Origin": "",

}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const users = [
    { date:"2015-02-10", name: "Dani", address: "Hertzel 60 PT" },
    { date: "2013-03-03", name: "Yossi", address: "Hertzel 40 TA" }
  ]
const port = 4000;

app.use(bodyParser.json());

app.get('/users', (req, res) => {
    return res.send(users);
  });
  
app.post('/user', (req, res) => {
    const user = req.body
    console.log("user", user)

    users.push(user)
    console.log("users", users)
    return res.send('Received a POST HTTP method');
  });


  app.listen(process.env.PORT || 5000,() =>
  console.log(`Example app listening on port ${port}!`),)


