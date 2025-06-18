const { MongoClient } = require('mongodb');
const fs = require('fs');

const uri = 'mongodb+srv://genevievehgiordano:GhoulYuki3798@fo2-items.znqy7hf.mongodb.net/?retryWrites=true&w=majority&appName=FO2-items';
const client = new MongoClient(uri);

async function exportItems() {
  try {
    await client.connect();
    const db = client.db('fo2Database');
    const collection = db.collection('items');

    const items = await collection.find().toArray();
    fs.writeFileSync('items.json', JSON.stringify(items, null, 2));
    console.log('Items exported to items.json');
  } finally {
    await client.close();
  }
}

exportItems().catch(console.error);
