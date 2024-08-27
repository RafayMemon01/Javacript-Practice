const brewCoffee = async (type)=>{
    return new Promise((resolve, reject)=>{
        const randomDelay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        setTimeout(()=>{
            resolve(`Here is your ${type} coffee`)
        }, randomDelay)
    })
}

(async () => {
    try {
      const result = await brewCoffee("Latte");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  })();
