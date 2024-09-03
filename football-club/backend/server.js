const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/football-club', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const playerSchema = new mongoose.Schema({
  name: String,
  position: String,
});

const Player = mongoose.model('Player', playerSchema);


app.get('/api/players', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});