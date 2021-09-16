const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const categoriesRoute = require('./routes/categories');
const multer = require('multer');

app.use(express.json());

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('MongoDB connected'))
  .catch((err) => {
    console.log(err);
  });

PORT = process.env.PORT || 3001;

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, 'img');
  },
  filename: (req, file, callBack) => {
    callBack(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/uploads', upload.single('file'), (req, res) => {
  res.status(200).json('File uploaded.');
});

app.get('/', (req, res) => {
  res.send('blog app');
});

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);
app.use('/api/categories', categoriesRoute);

app.listen(PORT, () => {
  console.log(`BackEnd server live on ${PORT}`);
});
