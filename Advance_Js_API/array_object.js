
const products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
]

const vegitables = products.map(product => product.name);
const vegitablesPrice = products.map(product => product.price);

console.log(vegitables);
console.log(vegitablesPrice);

products.map(product => console.log(product));

// filter

const filteredProducts = products.filter(product => product.type === 'vegetable');
console.log(filteredProducts);