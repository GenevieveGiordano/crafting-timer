const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://genevievehgiordano:GhoulYuki3798@fo2-items.znqy7hf.mongodb.net/?retryWrites=true&w=majority&appName=FO2-items';
const dbName = 'fo2Database';
const collectionName = 'items';

async function addOrderToItems() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Fetch all items
    const items = await collection.find({}).toArray();

    // Group by tier and group
    const grouped = {};

    for (const item of items) {
      const tier = item.tier || 'Unknown Tier';
      const group = item.group || 'Ungrouped';

      if (!grouped[tier]) grouped[tier] = {};
      if (!grouped[tier][group]) grouped[tier][group] = [];

      grouped[tier][group].push(item);
    }

    // Go through each group and assign order
    for (const tier in grouped) {
      for (const group in grouped[tier]) {
        const groupItems = grouped[tier][group];

        // Sort items alphabetically by name (or customize as needed)
        groupItems.sort((a, b) => a.name.localeCompare(b.name));

        // Assign order
        for (let i = 0; i < groupItems.length; i++) {
          const item = groupItems[i];
          const order = i + 1;

          await collection.updateOne(
            { _id: item._id },
            { $set: { order } }
          );

          console.log(`Updated ${item.name} → order: ${order}`);
        }
      }
    }

    console.log('✅ All items updated with order numbers.');

  } catch (error) {
    console.error('❌ Error adding order to items:', error);
  } finally {
    await client.close();
  }
}

addOrderToItems();
