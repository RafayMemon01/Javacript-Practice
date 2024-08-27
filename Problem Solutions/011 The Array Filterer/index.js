const filterProducts = (products,criterion)=>{
    return products.filter(product =>{
        for (const key in criterion) {
            if (criterion[key] !== undefined && product[key] !== criterion[key]) {
                return false;
              }
        
        }
        return true;
    })
}


const products = [
    { name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { name: "Phone", category: "Electronics", price: 800, inStock: false },
    { name: "T-shirt", category: "Clothing", price: 20, inStock: true },
    { name: "Jeans", category: "Clothing", price: 50, inStock: true },
    { name: "Blender", category: "Home Appliances", price: 100, inStock: false }
  ];
  
  const filteredProducts = filterProducts(products, { category: "Electronics", inStock: true });
  
  console.log(filteredProducts);
