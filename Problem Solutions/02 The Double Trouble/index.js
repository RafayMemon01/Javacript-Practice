let results = [];

const doubleTrouble = (arr)=>{

    for(i=0; i<arr.length; i++){
        if(arr[i] === arr[i-1]){
            results.push(arr[i]);
        }else{
            results.push(arr[i]*2);
        }
    }
    return results;
}

let arr = [2,2,3,4,5,6,7,8,10,10];
console.log(doubleTrouble(arr));