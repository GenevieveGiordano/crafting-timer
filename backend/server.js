const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://genevievehgiordano:GhoulYuki3798@fo2-items.znqy7hf.mongodb.net/?retryWrites=true&w=majority&appName=FO2-items';
const client = new MongoClient(uri);

async function connectToMongo() {
  await client.connect();
  console.log('✅ Connected to MongoDB Atlas');
}

connectToMongo();

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.get('/api/items', async (req, res) => {
  try {
    const db = client.db('fo2Database');
    const items = await db.collection('items').find().toArray();
    console.log('Fetched items:', items.length);
    res.json(items);
  } catch (err) {
    console.error('Error fetching items:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
