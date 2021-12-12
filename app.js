const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

const users = [
    { date:"2015-02-10", name: "Dani", address: "Hertzel 60 PT" },
    { date: "2013-03-03", name: "Yossi", address: "Hertzel 40 TA" }
  ]

app.use(bodyParser.json());

app.get('/users', (req, res) => {
    return res.send(users);
  });
  
app.post('/user', (req, res) => {
    const user = req.body
    users.push(JSON.parse(user.data))
    return res.send('Received a POST HTTP method');
  });


  app.listen(process.env.PORT || 5000,() =>
  console.log(`Example app listening on port 5000!`),)


