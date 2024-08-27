const calculateTotal = (products)=>{
    let total = 0;
    for (const product of products) {
        total += product.quantity * product.price;
    }
    return total;
}

const cart = [
    { name: "Laptop", price: 35000, quantity: 1 },
    { name: "Phone", price: 20000, quantity: 2 },
    { name: "T-shirt", price: 1200, quantity: 5 },
    { name: "Jeans", price: 1500, quantity: 3 },
  ];
  
  const total = calculateTotal(cart);
  console.log("Total cost:", total);