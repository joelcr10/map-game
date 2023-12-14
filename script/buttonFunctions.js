import { getQuestion } from "./game.js";

export const enableButton = () =>{
    let nextBtn = document.getElementById("next-question-btn");
    nextBtn.disabled = false;
    nextBtn.style.backgroundColor = "#3B71CA";
    nextBtn.style.cursor = "pointer";
    nextBtn.style.pointerEvents = "auto";
    nextBtn.onclick = function(){
            getQuestion();
        }
}

export const disableButton = () =>{
    let nextBtn = document.getElementById("next-question-btn");
    nextBtn.disabled = true;
    nextBtn.style.backgroundColor = "#D3D3D3";
    nextBtn.style.cursor = "default";
    nextBtn.style.pointerEvents = "none";
}