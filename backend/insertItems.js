const { MongoClient } = require('mongodb');
const itemGroups = require('./items.json'); // flat array

const uri = 'mongodb+srv://genevievehgiordano:GhoulYuki3798@fo2-items.znqy7hf.mongodb.net/?retryWrites=true&w=majority&appName=FO2-items';
const client = new MongoClient(uri);

function cleanItem(item) {
  // Let MongoDB generate a new _id if one is present
  if (item._id) delete item._id;

  // Ensure 'order' is a number, default to 0
  if (item.order === null || item.order === undefined) {
    item.order = 0;
  }

  return item;
}

async function insertItems() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('fo2Database');
    const collection = db.collection('items');

    // Clear existing documents to avoid duplicates
    await collection.deleteMany({});

    // Clean and insert items
    const cleanedItems = itemGroups.map(cleanItem);
    const result = await collection.insertMany(cleanedItems);

    console.log(`${result.insertedCount} items inserted!`);
  } catch (err) {
    console.error('Error inserting items:', err);
  } finally {
    await client.close();
  }
}

insertItems();
