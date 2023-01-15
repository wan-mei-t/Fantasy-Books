//calculator for quiz page
function pointsPerQuestion(question){
  let points = 0;
  
  for (let i = 0; i < 3; i++)
    {
      if (question.getElementsByTagName("input")[i].checked)
      {
        points = +question.getElementsByTagName("input")[i].value;
        question.style.backgroundColor="rgba(255, 0, 0, 0)"; 
      }
    }
 
  if (points === 0)
    {
      question.style.backgroundColor="rgba(255, 0, 0, 0.3)"; 
    }
  
  return points;
}

function displayAnswerInTable(result){  
  if (result < 6)
    {
      document.querySelector("#result-table tr:nth-child(2)").children[0].classList.add("table-cell-result");

    }
  else if (result <= 10)
    {
      document.querySelector("#result-table tr:nth-child(2)").children[1].classList.add("table-cell-result");
    }
  else if (result <= 15)
    {
      document.querySelector("#result-table tr:nth-child(2)").children[2].classList.add("table-cell-result");
    }
}

function reset(question1, question2, question3, question4, question5) {
  document.querySelector("#result-table tr:nth-child(2)").children[0].classList.remove("table-cell-result");
  document.querySelector("#result-table tr:nth-child(2)").children[1].classList.remove("table-cell-result");
  document.querySelector("#result-table tr:nth-child(2)").children[2].classList.remove("table-cell-result");
}


const quizButton = document.querySelector("#quiz-button");

quizButton.addEventListener("click", function() {
  
  let question1 = document.querySelector("#quiz-form").children[0];
  let question2 = document.querySelector("#quiz-form").children[1];
  let question3 = document.querySelector("#quiz-form").children[2];
  let question4 = document.querySelector("#quiz-form").children[3];
  let question5 = document.querySelector("#quiz-form").children[4];
  
  reset(question1, question2, question3, question4, question5);
  
  let q1 = pointsPerQuestion(question1);
  let q2 = pointsPerQuestion(question2);
  let q3 = pointsPerQuestion(question3);
  let q4 = pointsPerQuestion(question4);
  let q5 = pointsPerQuestion(question5);
  
  let result;
  if (q1 >= 1 && q2 >= 1 && q3 >= 1 && q4 >=1 && q5 >= 1)
    {
      result = q1 + q2 + q3 + q4 + q5;
      document.getElementById("quiz-result").innerText = "Result: "+ result + " points";
    }
  else
    {
      document.getElementById("quiz-result").innerText = "Make sure every question is answered";
    }
  
  displayAnswerInTable(result);
  
});