# Projects related DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 soloution

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

## project 2 soloution
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