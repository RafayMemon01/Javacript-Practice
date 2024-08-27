const vowelCounter = (str)=>{
    let vowelCount = 0;
    str = str.toLowerCase()

    const vowels = "aeiou"

    for(i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            vowelCount++
        }
    }

    return vowelCount;

}

console.log(vowelCounter("rafay")) //a,a = 2