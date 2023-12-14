class GlobalVariable{
    username = "";
    questionNo = 1;
    count = 0;
    currentQuestion = "";
    currentAnswer = "";
    correctAnswer = 0;
    uniqueRandom = [];
    map = true;

    get uniqueRandom(){
        return this.uniqueRandom; 
    }

    set uniqueRandom(res){
        this.uniqueRandom.push(res);
    }

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

    get correctAnswer(){
        return this.correctAnswer;
    }

    set correctAnswer(ans){
        this.correctAnswer = ans;
    }
}



export default GlobalVariable;