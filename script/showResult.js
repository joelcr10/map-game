import GlobalVariable from "./globalVariable.js";

const showResult = () =>{

    //removing map-container and all its elements
    document.getElementById('map-container').style.visibility = "hidden";
    document.getElementById('question-prompt').innerText = "";
    document.getElementById('result-prompt').innerText = "";


    let userName = GlobalVariable.username;
    // Capitalize the first letter
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    localStorage.setItem("score",GlobalVariable.score )
                     //to check if user scored above 50%
    if(GlobalVariable.score >= GlobalVariable.questionNo/2){
        
        swal({
            title: userName + "'s Score",
            text: "Congratulations, You have scored more than 50%",
            icon: "success",
            buttons: {
                reset: {
                    text: "Reset",
                    value: "reset",
                },
                anotherButton: {
                    text: "Report",
                    value: "reportPage",
                },
            },
        })
            .then(function (value) {
                switch (value) {
                    case "reset":
                        window.location.href = "./index.html";
                        break;
                    case "reportPage":
                        window.open("./report.html", "_blank");
                        break;
                    default:
                        // Handle other cases
                        break;
                }
            });
        
    }
    else{             //to check if user scored below 50%

             swal({
                title: userName + "'s Score",
                text: "Oops,You have scored less than 50%",
                icon: "error",
                buttons: {
                    reset: {
                        text: "Reset",
                        value: "reset",
                    },
                    anotherButton: {
                        text: "Report",
                        value: "reportPage",
                    },
                },
            })
                .then(function (value) {
                    switch (value) {
                        case "reset":
                            window.location.href = "./index.html";
                            break;
                        case "reportPage":
                            window.open("./report.html", "_blank");
                            break;
                        default:
                            // Handle other cases
                            break;
                    }
                });
            

    }
}

export default showResult;