


const startGame = () =>{
    console.log("pressed start button");
    let inputField = document.getElementById("firstName").value;
    if(inputField.length==0){
        // alert("User must enter name before playing");
        swal(
                {
                    title: "Map Quiz",
                    text: "You must enter name before playing",
                    icon: "info"
                }
            )
    }else{
        userName = inputField;//to get the username from user as input

        questionNo = parseInt(document.getElementById("number").value);//to get the number of questions the user wants to attempt

        localStorage.setItem('userName',userName);
        localStorage.setItem('questionNo',questionNo);
        localStorage.setItem('randomQuestionArray',[]);
        localStorage.setItem('correctAnswerArray',[]);
        localStorage.setItem('userAnswerArray',[]);

        
        window.location.href = "./gam.html";//to direct the user to the page where game starts

    }
}