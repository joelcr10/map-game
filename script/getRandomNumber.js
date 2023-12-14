import GlobalVariable from "./globalVariable.js";


const findRandom = () =>{
   let randomNumber;
   do{
      randomNumber = Math.floor((Math.random() * 10) + 1);
   }while(uniqueRandom.includes(randomNumber));
   uniqueRandom.push(randomNumber);
   
   return randomNumber;
   
}

 export default findRandom;

