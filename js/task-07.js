const input = document.querySelector('#font-size-control');
console.log(input);

const textEl = document.querySelector('#text');

input.addEventListener('input', textSize);

function textSize(evt){
    textEl.style.fontSize = `${evt.currentTarget.valueAsNumber}px`
}















// const controlEl = document.querySelector('#font-size-control');
// console.dir(controlEl);
// const textEl = document.querySelector('#text');
// controlEl.addEventListener('input', textChange);

// function textChange(evt) {
//     textEl.style.fontSize = `${evt.currentTarget.valueAsNumber}px` 
// }