import GlobalVariable from "./globalVariable.js";

const showResult = () =>{
    let userName = GlobalVariable.username;
    
                     //to check if user scored above 50%
    if(GlobalVariable.score>= GlobalVariable.questionNo/2){
        
        swal({
            title: userName.charAt(0).toUpperCase()+"'s Score",
            text: "Congratulations,You have scored more than 50%",
            icon: "success",
            button: "Reset",
             }
            )
        .then(function(){
            window.location.href = "./index.html";//to redirect to the first page
        })

    }
    else{             //to check if user scored below 50%

        swal(
                {
                 title: userName.charAt(0).toUpperCase()+"'s Score",
                 text: "Oops,You have scored less than 50%",
                 icon: "error",
                 button: "Reset",
                }
            )
        .then(function(){
                 window.location.href = "./index.html";//to redirect to the first page
                        }
             )

    }
}

export default showResult;