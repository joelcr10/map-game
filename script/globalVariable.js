class GlobalVariable{
    username = "";
    questionNo = 1;
    count = 0;
    currentQuestion = "";
    currentAnswer = "";
    score = 0;
   
    map = true;

    

    get count(){
        return this.count;
    }

    set count(num){
        this.count = num;
    }

    get username(){
        return this.username;
    }

    set username(name){
        this.username = name;
    }

    get currentAnswer(){
        return this.currentAnswer;
    }

    set currentAnswer(answer){
        this.currentAnswer = answer;
    }

    get currentQuestion(){
        return this.currentQuestion;
    }

    set currentQuestion(question){
        this.currentQuestion = question;
    }

    get score(){
        return this.score;
    }

    set score(ans){
        this.score = ans;
    }
}



export default GlobalVariable;