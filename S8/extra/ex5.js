const baseUrl = "https://opentdb.com/api.php?amount=";

const input$$ = document.querySelector("[data-function='questions-number']");
const button$$ = document.querySelector("[data-function='start-game']");
const buttonCheckGame$$ = document.querySelector("[data-function='check-game']");

const divFather$$ = document.querySelector("[data-function='gameboard']");
document.body.appendChild(divFather$$);

let aciertos = 0;
let fallos = 0;

function startGame() {
  resetGame();
  fetch(baseUrl + input$$.value)
    .then((response) => response.json())
    .then((data) => {
      printQuestions(data);
      console.log(data);
    });
}

function resetGame() {
  divFather$$.innerHTML = "";
}
//imprimir preguntas

function printQuestions(questions) {
  for (const question of questions.results) {
    console.log(question);
    const div$$ = document.createElement("div");
    const h2$$ = document.createElement("h2");
    //const p$$ = document.createElement("p");

    h2$$.textContent = question.question;
    //p$$.textContent = question.correct_answer;

    divFather$$.appendChild(div$$);
    div$$.appendChild(h2$$);

    printAnswers (question, div$$);
      //pRespuestas.addEventListener("click", answerQuestion(element));
    }
  }


const printAnswers =  (question, div$$ ) => {

  question.incorrect_answers.push(question.correct_answer);
    const respuestas = question.incorrect_answers;
    //console.log(question.incorrect_answers);
    
    //console.log(respuestas);

    for (let index = 0; index < respuestas.length; index++) {
      const element = respuestas[index];
      const pRespuestas = document.createElement("p");
      pRespuestas.textContent = element;
      div$$.appendChild(pRespuestas);
      pRespuestas.addEventListener('click', () => checkAnswer(event, question));

} 
}  

const checkAnswer = (event, question) =>{
  if(event.target.outerText === question.correct_answer){
    aciertos++;
  }else{
    fallos++
  }

}

const showResults = (aciertos, fallos) => {
  const resultP$$ = document.createElement('h3');
    resultP$$.classList.add('result');
    resultP$$.innerHTML = `Respuestas correctas: ${aciertos}. Respuestas incorrectas: ${fallos}`
    document.body.appendChild(resultP$$);
}

button$$.addEventListener("click", startGame);
buttonCheckGame$$.addEventListener("click", () => showResults(aciertos, fallos));

