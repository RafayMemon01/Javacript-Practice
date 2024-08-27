let first,second,third;

console.log('Business Name Generator')

let random = Math.random()

if(random<0.33){
    first = "Crazy"
}else if(random<0.66 && random>=0.33){
    first = "Amazing"
}else{
    first = "Fire"
}

random = Math.random()
if(random<0.33){
    second = "Engine"
}else if(random<0.66 && random>=0.33){
    second = "Foods"
}else{
    second = "Garments"
}

random = Math.random()
if(random<0.33){
    third = "Bros"
}else if(random<0.66 && random>=0.33){
    third = "Limited"
}else{
    third = "Hub"
}


//Business Name

console.log(`${first} ${second} ${third}`)


