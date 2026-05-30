const fs = require('fs');
const data = JSON.parse(fs.readFileSync('menuData.json', 'utf8'));

const order = [
  "grills",
  "pastries_pizza",
  "waffles",
  "crepes",
  "pancakes",
  "fashafesh",
  "ice_cream",
  "shisha",
  "hot_drinks",
  "cold_drinks",
  "fresh_drinks",
  "milkshakes",
  "mojitos",
  "soft_drinks",
];

const sortedData = [];
for (const id of order) {
  const cat = data.find(c => c.id === id);
  if (cat) {
    sortedData.push(cat);
  }
}

for (const cat of data) {
  if (!order.includes(cat.id)) {
    sortedData.push(cat);
  }
}

fs.writeFileSync('menuData.json', JSON.stringify(sortedData, null, 2));
console.log('Reordered menuData.json');
