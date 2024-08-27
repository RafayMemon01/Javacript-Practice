const checkPassword = (password) => {
    let upperCaseRegex = /[A-Z]/g;
    let lowerCaseRegex = /[a-z]/g;
    let numberRegex = /[0-9]/g;
  
    if (password.length < 8) {
      throw new Error("Password length should be at least 8 characters");
    }
    if (!password.match(upperCaseRegex)) {
      throw new Error("Password should contain at least one uppercase letter");
    }
    if (!password.match(lowerCaseRegex)) {
      throw new Error("Password should contain at least one lowercase letter");
    }
    if (!password.match(numberRegex)) {
      throw new Error("Password should contain at least one number");
    }
    return true;
  };
  
//   try {
//     let res = checkPassword("Abcdefgh1"); 
//     console.log(res);
//   } catch (error) {
//     console.log(error.message);
//   }
  
let res = checkPassword("Abcdefgh1");

console.log(res);