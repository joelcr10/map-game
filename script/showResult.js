import GlobalVariable from "./globalVariable.js";

const showResult = () =>{
    let userName = GlobalVariable.username;
    
    if(GlobalVariable.correctAnswer>= GlobalVariable.questionNo/2){
        
        swal({
            title: userName+"'s Score",
            text: "Congratulations,You have scored more than 50%",
            icon: "success",
            button: "Reset",
        }).then(function(){
            window.location.href = "./index.html";
        })

    }else{

        swal({
            title: userName+"'s Score",
            text: "Oops,You have scored less than 50%",
            icon: "error",
            button: "Reset",
        }).then(function(){
            window.location.href = "./index.html";
        })

    }
}

export default showResult;