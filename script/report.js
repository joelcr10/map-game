
import GlobalVariable from "./globalVariable.js";

GlobalVariable.questionNo = parseInt(localStorage.getItem("questionNo"));
GlobalVariable.username = localStorage.getItem("userName");
let userName = GlobalVariable.username;
userName = userName.charAt(0).toUpperCase() + userName.slice(1);


let randomQuestionArray = localStorage.getItem("randomQuestionArray").split(","); 
let correctAnswerArray = localStorage.getItem("correctAnswerArray").split(",");
let userAnswerArray = localStorage.getItem("userAnswerArray").split(",");
let score = localStorage.getItem("score");


document.getElementById("user-name").innerText=userName;
document.getElementById("score-card").innerText="Your score is "+score +" out of "+GlobalVariable.questionNo;

const printReport = () => {
    let table = document.getElementById("reoprt-table");

    //Creating the table rows

    for(let i=0;i<GlobalVariable.questionNo;i++){

        let tr = document.createElement('tr');

        let td1 = document.createElement("td");   
        td1.textContent = randomQuestionArray[i];

        let td2 = document.createElement("td");
        td2.textContent = userAnswerArray[i];

        let td3 = document.createElement("td");
        td3.textContent = correctAnswerArray[i];

        tr.append(td1);
        tr.append(td2);
        tr.append(td3);

        table.append(tr);

        
    }

    
    

  
  }

  printReport();