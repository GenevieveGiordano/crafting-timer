const { MongoClient } = require('mongodb');
const itemGroups = require('./items.js'); // your itemGroups object here

const uri = 'mongodb+srv://genevievehgiordano:GhoulYuki3798@fo2-items.znqy7hf.mongodb.net/?retryWrites=true&w=majority&appName=FO2-items';
const client = new MongoClient(uri);

function flattenWithTier(itemGroups) {
  const itemsWithTier = [];

  for (const tier in itemGroups) {
    const groups = itemGroups[tier];
    for (const groupName in groups) {
      const items = groups[groupName];
      items.forEach(item => {
        itemsWithTier.push({
          ...item,
          tier: tier,
          group: groupName
        });
      });
    }
  }

  return itemsWithTier;
}

async function insertItems() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('fo2Database');
    const collection = db.collection('items');

    // Clear existing documents in the collection to avoid duplicates
    await collection.deleteMany({});

    const items = flattenWithTier(itemGroups);

    const result = await collection.insertMany(items);

    console.log(`${result.insertedCount} items inserted!`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

insertItems();
