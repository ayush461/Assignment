const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const { authenticate, generateToken } = require('./middleware/authenticate');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { ExtractJwt, Strategy: JwtStrategy } = require('passport-jwt');

const connectDB = require('./db');

const app = express();

connectDB();

app.use(express.json());

// Register a new user
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});
// Login
app.post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, (error, user) => {
      if (error || !user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      req.login(user, { session: false }, (err) => {
        if (err) {
          return res.status(500).json({ message: 'An error occurred' });
        }
  
        const token = generateToken(user);
        res.json({ token });
      });
    }) (req, res, next);
  });
  

// Protected route
app.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
});

// Logout
app.get('/logout', (req, res) => {
  res.json({ message: 'Logged out' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
