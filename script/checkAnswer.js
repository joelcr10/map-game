import GlobalVariable from "./globalVariable.js";
import showResult from "./showResult.js";
import { enableButton } from "./buttonFunctions.js";

export const checkAnswer = (idName) =>{
    if(GlobalVariable.map){

        let userAnswer = idName;//identifies the area specified in areas

        if(userAnswer == GlobalVariable.currentAnswer){
            document.getElementById("result-prompt").innerText = "Correct";
            document.getElementById("result-prompt").style.color = "green";
            document.getElementById("result-prompt-wrong").innerText =" ";

            GlobalVariable.score = GlobalVariable.score+1;
            

        }else{
            document.getElementById("result-prompt").innerText = "Wrong";
            document.getElementById("result-prompt").style.color = "red";
            document.getElementById("result-prompt-wrong").innerText = "Correct Answer is: "+GlobalVariable.currentAnswer;
            document.getElementById("result-prompt-wrong").style.color = "green";
        
        }
        //document.getElementById("result-prompt-wrong").innerText =" ";

        GlobalVariable.count = GlobalVariable.count+1;//go to next question

        if(GlobalVariable.count==GlobalVariable.questionNo){

            setTimeout(showResult, 1000);//shows result if question number reaches limit

        }


        //to activate the next question button
        enableButton();



        document.getElementById("the-map").style.pointer = "default";
        GlobalVariable.map = false;//returns map to initial position
    }
}