const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb://genevievehgiordano:GhoulYuki3798@" +
  "ac-yiawmah-shard-00-00.znqy7hf.mongodb.net:27017," +
  "ac-yiawmah-shard-00-01.znqy7hf.mongodb.net:27017," +
  "ac-yiawmah-shard-00-02.znqy7hf.mongodb.net:27017/" +
  "fo2Database?ssl=true&replicaSet=atlas-pacrwz-shard-0&authSource=admin&retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  maxPoolSize: 10,
  minPoolSize: 1,
  serverSelectionTimeoutMS: 5000,
});

const PORT = 5000;

async function startServer() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB', error);
    process.exit(1);
  }
}

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

startServer();
