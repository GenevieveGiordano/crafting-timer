const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://genevievehgiordano:GhoulYuki3798@fo2-items.znqy7hf.mongodb.net/fo2Database?retryWrites=true&w=majority&appName=FO2-items';

// Removed tls options for MongoClient — the driver handles TLS automatically with mongodb+srv://
const client = new MongoClient(uri, {
  maxPoolSize: 10,
  minPoolSize: 1,
  serverSelectionTimeoutMS: 5000,
  // Removed tls: true and tlsAllowInvalidCertificates
  // Removed minTLSVersion option
});

const PORT = 5000;

async function startServer() {
  try {
    await client.connect();  // Wait for connection to MongoDB Atlas
    console.log('✅ Connected to MongoDB Atlas');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB', error);
    process.exit(1); // Exit process with failure code
  }
}

// Define your routes here, e.g.:
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

// Call startServer to connect DB and launch app
startServer();
