import { useState, useEffect } from 'react';

export default function useItems() {
  const [itemGroups, setItemGroups] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const groupItemsByCategoryAndGroup = (items) => {
      return items.reduce((acc, item) => {
        const category = item.category || 'defaultCategory';
        const group = item.group || 'defaultGroup';

        if (!acc[category]) acc[category] = {};
        if (!acc[category][group]) acc[category][group] = [];

        acc[category][group].push(item);
        return acc;
      }, {});
    };

    const fetchItems = async () => {
      try {
        const API_URL = 'https://crafting-timer.onrender.com/api/items';
        const response = await fetch(API_URL);
        const data = await response.json();

        const groupedData = groupItemsByCategoryAndGroup(data);
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
