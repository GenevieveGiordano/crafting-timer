import { useState, useEffect } from 'react';

export default function useItems() {
  const [itemGroups, setItemGroups] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const groupItemsByTierAndGroup = (items) => {
      return items.reduce((acc, item) => {
        const tier = item.tier || 'defaultTier';
        const group = item.group || 'defaultGroup';

        if (!acc[tier]) acc[tier] = {};
        if (!acc[tier][group]) acc[tier][group] = [];

        acc[tier][group].push(item);
        return acc;
      }, {});
    };

    const fetchItems = async () => {
      try {
        const API_URL = 'https://crafting-timer.onrender.com/api/items';
        const response = await fetch(API_URL);
        const data = await response.json();

        const groupedData = groupItemsByTierAndGroup(data);
        setItemGroups(groupedData);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return { itemGroups, loading };
}
