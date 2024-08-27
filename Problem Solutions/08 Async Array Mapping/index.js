const fun = async (numbers)=>{
    return numbers.map((number)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(number*2)
            }, 500)
        })
    })    

}

(async ()=>{
    try {
        const numbers = [1,2,3,4,5]
        const result = await Promise.all(await fun(numbers))
        console.log(result)
        
    } catch (error) {
        console.error("error",error)
    }
})()