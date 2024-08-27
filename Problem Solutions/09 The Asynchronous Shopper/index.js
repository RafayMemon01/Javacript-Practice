const placeOrder = async () =>{
    return new Promise((resolve, reject) => {
        const randomDelay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

        setTimeout(() => {
           const userConfirmed =  confirm('Did you really want to order')
            userConfirmed?resolve('Order Placed'):reject('Order Cancelled')
        }, randomDelay);
    });
}


(async () => {
    try {
      const result = await placeOrder();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  })();


// This code should be run in the browser console because Node.js does not support the confirm method, which is specific to web browsers.
