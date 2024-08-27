const sumSelector = (arr)=>{
     let result= 0;

     for(i=0;i<arr.length;i++){
        if(arr[i] < 0){
            break
        }
        result += arr[i]
        
     }
     return result
    

}


console.log(sumSelector([10,10,-3, 20,-1]))


// Output Explanation:

// The array [10, 10, -3, 20, -1] is processed:
// 10 is added to result (total = 10).
// The next 10 is added to result (total = 20).
// When -3 is encountered, the loop breaks.
// The function returns 20 as the sum up to the first negative number.