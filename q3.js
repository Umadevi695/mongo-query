db.products.insertOne({
  name: "Laptop",
  description: "A high-performance laptop for developers",
  price: 1200,
  imageUrl: "https://picsum.photos/seed/laptop/400/300",
});
db.products.insertMany([
  {
    name: "Smartphone",
    description: "An Android smartphone with 5G support",
    price: 800,
    imageUrl: "https://picsum.photos/seed/smartphone/400/300",
  },
  {
    name: "Headphones",
    description: "Wireless noise-cancelling headphones",
    price: 200,
    imageUrl: "https://picsum.photos/seed/headphones/400/300",
  },
]);
db.products.find();
