import findRandom from "./getRandomNumber.js";
import GlobalVariable from "./globalVariable.js";
// import showResult from "./showResult.js";
import { disableButton } from "./buttonFunctions.js";

let questions = new Map([

    [1, "Which continent is India part of?"],

    [2, "Which is the largest continent in area?"],

    [3, "Which is the smallest continent in area?"],

    [4, "Which continent is also called as an 'Island-Continent'?"],

    [5, "The largest mountain in the world, Mount Everest is situated in which continent?"],

    [6, "On Which Continent Is Egypt?"],

    [7, "On which continent can you find France?"],

    [8, "Which is the Second biggest continent of the world?"],

    [9, "Columbus found which continent?"],

    [10, "Where is Amazon River?"]

]);

let answers = new Map([
    [1, "Asia"],
    [2, "Asia"],
    [3, "Australia"],
    [4, "Australia"],
    [5, "Asia"],
    [6, "Africa"],
    [7, "Europe"],
    [8, "Africa"],
    [9, "North America"],
    [10, "South America"]


]);


GlobalVariable.count = 0;  // Initially Setting the question count to zero
GlobalVariable.score = 0;  // Initially the Score will be Zero

GlobalVariable.questionNo = parseInt(localStorage.getItem("questionNo"));
GlobalVariable.username = localStorage.getItem("userName");

let randomQuestionArray=[];
let correctAnswerArray=[];

export const getQuestion = () =>{
    
    disableButton();
    GlobalVariable.map = true;  // To enable the map to click the area 

    document.getElementById("the-map").style.cursor = "pointer";  //Setting the pointer when hover

    document.getElementById("result-prompt").innerText = "";      //To clear the result-prompt before showing correct or wrong

    

    console.log(GlobalVariable.count,GlobalVariable.questionNo)
    if(GlobalVariable.count < GlobalVariable.questionNo){

        let randomNumber = findRandom();
        
        
        GlobalVariable.currentQuestion = questions.get(randomNumber);
        GlobalVariable.currentAnswer = answers.get(randomNumber);

        randomQuestionArray.push(GlobalVariable.currentQuestion); // for storing generated questions
        correctAnswerArray.push(GlobalVariable.currentAnswer);    // for storing correct answer of generated questions

        localStorage.setItem('randomQuestionArray',randomQuestionArray); //storing the current question info in Local storage
        localStorage.setItem('correctAnswerArray',correctAnswerArray);   //storing the current answer info in Local storage

        document.getElementById("question-prompt").innerText = GlobalVariable.currentQuestion;
    }
    // GlobalVariable.count = GlobalVariable.count + 1;
}


getQuestion();   //Called initially to show the first question within the page load






