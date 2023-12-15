import GlobalVariable from "./globalVariable.js";

const showResult = () =>{

    //removing map-container and all its elements
    document.getElementById('map-container').style.visibility = "hidden";
    document.getElementById('question-prompt').innerText = "";
    document.getElementById('result-prompt').innerText = "";


    let userName = GlobalVariable.username;
    // Capitalize the first letter
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);

    //to check if user scored above 50%
    if(GlobalVariable.score>= GlobalVariable.questionNo/2){


        //to add firework animation 
        document.getElementById("main").style.backgroundImage =   "url('./assets/pass.gif')";

        swal({
            title: userName+"'s Score",
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

        //to add crying animation 
        document.getElementById("main").style.backgroundImage =   "url('./assets/fail.gif')";
       
        swal(
                {
                 title: userName+"'s Score",
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