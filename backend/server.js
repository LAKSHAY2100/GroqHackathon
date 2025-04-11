const express = require('express');
const cors = require('cors');
const mongoose=require('mongoose')
const app = express();
const PORT = 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

  const userRoutes=require('./routes/userRoutes');
  const newsRoutes=require('./routes/newsRoutes');
  app.use('/user',userRoutes);
  app.use('/news',newsRoutes);

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});



app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
