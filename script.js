var output = document.getElementById('output');
var bAnswer = document.getElementsByClassName('btnAns');
var myObj = '';
    page = 0;
    crtAnswer = 0;
loadQuestions();
//event listeners
btnPre.onclick = function(){buildQuiz(page - 1)};
btnNxt.onclick = function(){buildQuiz(page + 1)};
function loadQuestions(){
    var a = new XMLHttpRequest();
    a.open( "GET", "https://api.myjson.com/bins/4b0qn", true);
    a.onreadystatechange = function () {
    if (a.readyState ==4){
        myObj = JSON.parse(a.responseText);
        buildQuiz(1);
    }
}
    a.send();    
}

function buildQuiz(pg){
    page = pg;
    if(page > 0){
    var myQuestion = myObj[page-1].question;
    var myCorrect = myObj[page-1].correct;
    crtAnswer = myObj[page-1].answers[myCorrect];
    var questionHolder = '';
    var yesCor ='';
    
    for(var i in myObj[page - 1].answers){
        if(i == myCorrect){yesCor = '*';
        }else {
            yesCor='';
        }
        questionHolder += '<div class="col-sm-6"><div class="btnAns">' + myObj[page-1].answers[i] + '</div></div>';
    }
    output.innerHTML ='<div class="MyQ">' + myQuestion + ' ' +  myCorrect + '</div>';
    output.innerHTML += questionHolder;
        for(var x = 0; x < bAnswer.length; x++){
            bAnswer[x].addEventListener('click', myAnswer, false);
        }
    console.log(bAnswer);
    }
}
function myAnswer(){
    var myResult ='';
   if(this.innerText == crtAnswer){
       myResult = "correct";
}else {
    myResult = "incorrect";
}
    console.log(myResult);
}
/*var myData = '[{"question":"what is linux","answers":["an operating system","a browser","an application","a penguin"," a programming language"],"correct":0},{"question":"what is firefox","answers":["a browser","an application","a wild dog","an operating system","a scriptin"],"correct":0}]';
var myObj = JSON.parse(myData);
for (var i in myObj){
output.innerHTML += myObj[i].question + '? <br>';
}*/
//console.log(myObj);