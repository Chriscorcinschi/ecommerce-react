const products = [
   {
      id: 1,
      name: "Galaxy S23 Smartphone",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500",
      description:
         "Latest generation smartphone with 6.1' AMOLED display, 50MP camera and long-lasting battery.",
   },
   {
      id: 2,
      name: "Ultra Pro Notebook",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
      description:
         "Powerful notebook with Intel i7 processor, 16GB RAM and 512GB SSD. Perfect for work and gaming.",
   },
   {
      id: 3,
      name: "Wireless Buds Headphones",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1618213520536-ce37aabcd9e5?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
         "True wireless headphones with noise cancellation, deep bass and 24-hour battery life.",
   },
   {
      id: 4,
      name: "Active 5 Smartwatch",
      price: 279.99,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
      description:
         "Smartwatch with activity tracking, heart rate monitor, built-in GPS and water resistance.",
   },
   {
      id: 5,
      name: "Pro 12.9 Tablet",
      price: 999.99,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
      description:
         "Professional tablet with Liquid Retina display, M2 chip and Apple Pencil support.",
   },
   {
      id: 6,
      name: "X-T5 Mirrorless Camera",
      price: 1699.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
      description:
         "Professional mirrorless camera with 26MP APS-C sensor and 4K video recording.",
   },
   {
      id: 7,
      name: "Surround Gaming Headset",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
         "Gaming headset with 7.1 surround sound, removable microphone and comfort for long sessions.",
   },
   {
      id: 8,
      name: "Curved 32' Monitor",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
      description:
         "Curved WQHD monitor with 165Hz refresh rate, ideal for gaming and productivity.",
   },
   {
      id: 9,
      name: "RGB Mechanical Keyboard",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1672211775632-bcb4b68eb2bd?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
         "Mechanical keyboard with blue switches, customizable RGB backlighting and wrist rest.",
   },
   {
      id: 10,
      name: "20000mAh Power Bank",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1619489646924-b4fce76b1db5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
         "High capacity portable battery with fast charging and two USB ports.",
   },
];

export function getProducts() {
   return products;
}

export function getProductsById(id) {
   return products.find((p) => p.id === Number(id));
}
