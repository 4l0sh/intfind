const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 4000;

//middleware
app.use(cors());
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
    console.log('Error connecting to database : ', err);
  });

//insert user
app.post('/users/signup', (req, res) => {
  const collection = db.collection('users');
  collection.findOne({ email: req.body.email }).then((existingUser) => {
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

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
        res.status(500).json({ message: 'Error adding user' });
      });
  });
});

app.post('/users/skills', (req, res) => {
  const { userId, softSkills, techSkills } = req.body;

  if (!userId || !softSkills || !techSkills) {
    return res.status(400).json({ message: 'Missing data' });
  }

  const collection = db.collection('users');

  collection
    .updateOne(
      { _id: new MongoClient.ObjectId(userId) },
      {
        $set: {
          softSkills,
          techSkills,
        },
      }
    )
    .then((result) => {
      if (result.matchedCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'Skills updated successfully' });
    })
    .catch((err) => {
      console.log('Error updating skills:', err);
      res.status(500).json({ message: 'Error updating skills' });
    });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
