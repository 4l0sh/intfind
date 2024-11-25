const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 4000;

//middleware
app.use(express.json());

//mongodb connection
const mongoUri =
  'mongodb+srv://alisina:alisina123!@intfind.9hoqy.mongodb.net/?retryWrites=true&w=majority&appName=intfind';

let db;
MongoClient.connect(mongoUri)
  .then((client) => {
    db = client.db('intfind');
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log('Error connectin to database : ', err);
  });

//isnert user
app.post('/users/signup', (req, res) => {
  const collection = db.collection('users');
  const user = req.body;
  collection
    .insertOne(user)
    .then((result) => {
      const response = {
        status: 200,
        userId: result.insertedId,
        message: 'User has been inserted successfully',
      };
      console.log('user added: ', response);
      res.json(response);
    })
    .catch((err) => {
      console.log('error adding user', err);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
