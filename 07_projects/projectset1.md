# Projects related DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 solution

```javascript
console.log("Hello")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');


buttons.forEach( (button)=> {
  console.log(button); 
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    // switch(e.target.id){
    //   case 'grey':
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case 'blue':
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case 'white':
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case 'yellow':
    //     body.style.backgroundColor = e.target.id;
    //     break;

    // }
    if(e.target.id === 'grey'||'blue' || 'white' || 'yellow' ){
      body.style.backgroundColor = e.target.id;
    }
  })
});


```

## project 2 solution
```javascript
const form = document.querySelector('form')
// this use-case will give empty values 
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)


form.addEventListener('submit', (e)=> {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  //checks 
  if(height === ''|| height < 0 || isNaN(height)){
    results.innerHTML = "please give a valid height"
  } else if(weight === ''|| weight < 0 || isNaN(weight)){
    results.innerHTML = "please give a valid weight"
  } else{
    const bmi = (weight / ((height*height)/ 10000)).toFixed(2)
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }

})
```

## project 3 solution
```javascript
const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```
## proJect 4 solution
```javascript
let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){ 
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess){

  //Checks
  if(isNaN(guess)){
    alert(`Please give a valid number`);
  } else if(guess < 1){
    alert(`Please give a valid number`);
  } else if(guess > 100){
    alert(`Please give a number less than 100`);
  } else {
    //push guess count into array
    prevGuess.push(guess)
    if(numGuess === 11){
      DisplayGuess(guess)
      DisplayMessage(`Game Over. Random number = ${randomNumber}`)
      EndGame()
    } else {
      DisplayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    DisplayMessage(`You Guessed it right`)
    EndGame()
  }else if(guess < randomNumber){
    DisplayMessage(`Number is too low`)
  }else if(guess > randomNumber){
    DisplayMessage(`Number is too high`)
  }
}

function DisplayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}; `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function DisplayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function EndGame(){
  userInput.value = ''
  userInput.setAttribute(`disabled`, ``)
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
  startOver.appendChild(p)
  playGame = false
  NewGame();
}
function NewGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeAttribute(p)


    playGame = true
  })
}
```
## project 5 solution
```javascript
const insert = document.getElementById('insert')


window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' '? 'Space': e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
  </div>
  `;
});
``` 

## project 6 solution
```javascript
//generate a random colour

const randomColor = function(){
  const hex = "0123456789ABCDEF";
  let color = '#';
  for(i = 0; i< 6; i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
};
let intervalId;
document.querySelector('#start').addEventListener('click', function(){
  function changeColor(){document.body.style.backgroundColor = randomColor()}
  if(!intervalId){ 
    intervalId = setInterval(changeColor, 1000)
  }
})

document.querySelector('#stop').addEventListener('click',function(){
  clearInterval(intervalId);
  intervalId = null; //flashing out the variable when not is use , not overutilising memory
})
```
