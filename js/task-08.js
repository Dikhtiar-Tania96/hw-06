const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', inSubmit);

function inSubmit(evt){
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;


    if(email.value === '' || password.value === ''){
        return alert('Всі поля повинні бути заповнені!')
    } 

    const data = {
        email : email.value,
        password : password.value
    };
    console.log(data);

    evt.currentTarget.reset()
}






// const formEl = document.querySelector('.login-form');
// console.dir
// formEl.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//     evt.preventDefault();
//     const { email, password } = evt.currentTarget.elements;
   
//     if (!email.value || !password.value) {
//        return alert("Fields could not be empty!")
//     } 

//     const data = {
//         email: email.value,
//         password: password.value,
//     }
//     console.log(data);
//     evt.currentTarget.reset();
// }
