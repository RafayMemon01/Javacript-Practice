const stringMirrorOf = (original)=>{
    //with loop
    let reversed = ""
    for(let i=original.length - 1; i>=0; i--){
        reversed+=original[i];
    }

    //with array method first string to array then reverse and again array to string
    //let reversed = original.split('').reverse().join('');
    
    return reversed;
}


let reversed = stringMirrorOf("hello");
console.log(reversed)