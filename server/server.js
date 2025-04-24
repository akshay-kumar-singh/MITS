require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const geminiRoute = require('./routes/geminiRoute');
const emailRoutes = require('./routes/emailRoutes');

connectDB();

const app = express();
// app.use(cors({
//   origin: 'http://localhost:5173',
//   credentials: true
// }));

app.use(cors({
  origin: 'https://nsma.vercel.app',
  credentials: true,
}));

app.use(express.json());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/gemini', geminiRoute);

app.use('/api/email', emailRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
