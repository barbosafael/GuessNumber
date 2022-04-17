const form = document.getElementByld("form");
form.addEventListener("submit", handleSubmit);

let status = document.getElementByld("status");
let attempt = document.getElementByld("attempt");
let result = document.getElementByld("result");

const Guess = {
  max: 10,
  attemptsNumber: 0,
  numberDrawn: function randomValue() {
    return Math.round(Math.random)  * this.max);
  }
};

let numberDrawn = Guess.numberDrawn();

function updateAttempt(attempt, value) {
  attempt.innerHTML = "Tentativa: " + value
};

function handleSubmit(e) {
  e.preventDefault();
}
  let kick = document.getElementByld("kick").value;

  if (!kick) {
    alert("Digite algum valor!")
    return;
  };

  updateAttempt(attempt, ++Guess.attemtsNumber);

if(numberDrawn == kick) {
  playAgain();
  status.innerHTML = "Parabéns, você acertou!";
  result.style.transition = "0.4s";
  result.style.backgroundColor = "#37c978";
  result.style.color = "#fff";
  status.style.color = "#fff";
  clear();
 }  else if (numberDrawn > kick) {
    status.innerHTML = "O número é maior!";
    status.style.color = "#de4251";
    clear();
 } else if(numberDrawn < kick) {
  status.innerHTML = "O número é menor!";
  status.style.color = "#de4251";
  clear();   
     
}
  
 };

function playAgain() {
  document.getElementByld("btnRestart").style.display = "flex"
};

function restart() {
  document.location.reload(true);
  };

function clear() {
  document.getElementByld("kick").value = "";
  };