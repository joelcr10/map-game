import GlobalVariable from "./globalVariable.js";

var uniqueRandom = []
const findRandom = () =>{
   let randomNumber;
   do{
      randomNumber = Math.floor((Math.random() * 10) + 1);
   }while(uniqueRandom.includes(randomNumber));
   uniqueRandom.push(randomNumber);
   console.log(uniqueRandom);
   return randomNumber;
   
}

 export default findRandom;

