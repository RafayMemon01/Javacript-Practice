const setAuthToken = (token, expiresInMinutes)=>{
    const experiationTime = new Date().getTime() + expiresInMinutes * 60 * 1000;

    const tokenObject = {
        value: token,
        expiration: experiationTime
    }
    localStorage.setItem("authToken",JSON.stringify(tokenObject))
}

const getAuthToken = ()=>{
    const tokenObject = JSON.parse(localStorage.getItem("authToken"));
    if(!tokenObject){
        return null;
    }
    const currentTime = new Date().getTime();
    if(currentTime > tokenObject.expiration){
        localStorage.removeItem("authToken");
        return null;
    }
    return tokenObject.value;
}





//check
setAuthToken("ajojwoij929juu921u9u2j98u32i9i32iojqj", 5);
const token = getAuthToken();
console.log(token);