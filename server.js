const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 4000;
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'intfind';

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

//verify User
function verifyToken(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Unautorized: no token' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      iss: 'http://localhost:4000',
    });
    req.user = decoded;
    next();
  } catch (err) {
    console.log('error verifying token', err);
    return res.status(401).json({ error: 'Unautorized: invalid token' });
  }
}

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
        const token = jwt.sign(
          {
            userId: result._id,
            username: result.username,
            iss: 'http://localhost:4000',
            role: 'student',
          },
          JWT_SECRET,
          { expiresIn: '1h' }
        );
        const response = {
          status: 200,
          userId: result.insertedId,
          message: `User ${result.username} has been inserted successfully`,
          token: token,
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

//insert role
app.post('/users/roles', (req, res) => {
  const collection = db.collection('roles');
  const role = req.body.role;
  const userId = req.body.userId;

  collection
    .insertOne({ _id: userId, role: role })
    .then((response) => {
      res.status(200).json({ message: 'Role has been inserted successfully' });
    })
    .then((result) => {
      console.log('role added');
    })
    .catch((err) => {
      console.log('error adding role', err);
      res.status(500).json({ message: 'Error adding role' });
    });
});

//insert skills
app.post('/skills', (req, res) => {
  const collection = db.collection('skills');
  const skills = req.body.skills;
  const userId = req.body.userId;

  if (!userId) {
    console.log('User not logged in');
    return res.status(400).json({ message: 'You are not logged in ' });
  }
  const skillsWithId = {
    _id: userId,
    ...skills,
  };
  collection
    .insertOne(skillsWithId)
    .then((result) => {
      const response = {
        status: 200,
        message: 'Skills have been inserted successfully',
      };
      console.log('skills added: ', response);
      res.json(response);
    })
    .catch((error) => {
      console.log('error adding skills', error);
      res.status(500).json({ message: 'Error adding skills' });
    });
});

//insert techskills
app.post('/techskills', (req, res) => {
  const collection = db.collection('techskills');
  const techskills = req.body.techskills;
  const userId = req.body.userId;

  if (!userId) {
    console.log('User not logged in');
    return res.status(400).json({ message: 'You are not logged in' });
  }
  const techskillWithId = {
    _id: userId,
    ...techskills,
  };
  collection
    .insertOne(techskillWithId)
    .then((result) => {
      const response = {
        status: 200,
        message: 'techskills have been added syccessfully',
      };
      console.log('techskills added', response);
      res.json(response);
    })
    .catch((error) => {
      console.log('error adding techskills', error);
      res.status(500).json({ message: 'Error adding techskills' });
    });
});

//insert opleiding
app.post('/opleiding', (req, res) => {
  const collection = db.collection('opleiding');
  const opleiding = req.body.Opleiding;
  const userId = req.body.userId;

  if (!userId) {
    console.log('User not logged in');
    return res.status(400).json({ message: 'You are not logged in' });
  }
  const opleidingWithId = {
    _id: userId,
    ...opleiding,
  };
  collection
    .insertOne(opleidingWithId)
    .then((result) => {
      const response = {
        status: 200,
        message: 'Opleiding has been inserted successfully',
      };
      console.log('opleiding added', response);
    })
    .catch((error) => {
      console.log('error adding opleiding', error);
      res.status(500).json({ message: 'Error adding opleiding' });
    });
});

//insert experience
app.post('/experience', verifyToken, (req, res) => {
  const collection = db.collection('experience');
  const experience = req.body.inputs;
  const userId = req.body.userId;

  if (!userId) {
    console.log('User not logged in');
    return res.status(400).json({ message: 'You are not logged in' });
  }
  const experienceWithId = {
    _id: userId,
    ...experience,
  };
  collection
    .insertOne(experienceWithId)
    .then((result) => {
      const response = {
        status: 200,
        message: 'Experience has been inserted successfully',
      };
      console.log('experience added', response);
    })
    .catch((error) => {
      console.log('error adding experience', error);
      res.status(500).json({ message: 'Error adding experience' });
    });
});

//insert referenties
app.post('/referenties', verifyToken, (req, res) => {
  const collection = db.collection('referenties');
  const referentie = req.body.referentie;
  const userId = req.body.userId;

  if (!userId) {
    console.log('User not logged in');
    return res.status(400).json({ message: 'You are not logged in' });
  }
  const referentieWithId = {
    _id: userId,
    ...referentie,
  };
  collection
    .insertOne(referentieWithId)
    .then((result) => {
      const response = {
        status: 200,
        message: 'Referentie has been inserted successfully',
      };
      console.log('referentie added', response);
    })
    .catch((err) => {
      console.log('error adding references', err);
    });
});

//login user
app.post('/login', (req, res) => {
  const collection = db.collection('users');
  collection
    .findOne({ email: req.body.email, password: req.body.password })
    .then((result) => {
      if (!result) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = jwt.sign(
        {
          userId: result._id,
          username: result.username,
          iss: 'http://localhost:3000',
        },
        JWT_SECRET,
        { expiresIn: '1h' }
      );
      const response = {
        status: 200,
        userId: result._id,
        message: `User ${result.username} has been logged in successfully`,
        token: token,
      };
      res.json(response);
    })
    .catch((err) => {
      console.log('error logging in', err);
      res.status(500).json({ message: 'Error logging in' });
    });
});

app.post('/findUser', (req, res) => {
  const collection = db.collection('users');
  const email = req.body.email;
  collection.findOne({ email: email }).then((result) => {
    if (!result) {
      return res.status(401).json({ message: 'User not found' });
    }
    const response = {
      status: 200,
      userId: result._id,
      message: `User ${result.username} has been found`,
      token: jwt.sign(
        {
          userId: result._id,
          username: result.username,
          iss: 'http://localhost:3000',
        },
        JWT_SECRET,
        { expiresIn: '1h' }
      ),
    };
    res.json(response);
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
