const valid = document.querySelector('#validation-input');

valid.addEventListener('blur', onBlur);

function onBlur(evt){
    const element = evt.currentTarget;

    if(element.value.length === Number(element.dataset.length)){
        element.classList.remove('invalid');
        element.classList.add('valid')
    }else {
        element.classList.add('invalid')
    }
}






































// const input = document.querySelector('#validation-input');

// input.addEventListener('blur', onBlur);

// function onBlur(evt) {
//     const element = evt.currentTarget;
//     // console.dir(element);
   
//     if (element.value.length === Number(element.dataset.length)) {
//         if (element.classList.contains("invalid")){
//              element.classList.remove('invalid')
//             element.classList.add("valid")

//         }
       
//     } else {
//         element.classList.add("invalid")
//     }
// }