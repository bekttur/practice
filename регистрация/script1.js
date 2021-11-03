let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector("#myBtn");

button.addEventListener('click', () => {
    let full_name = fullName.value;
    let e_mail = email.value;
    let pass_word = password.value;

    let user = {
        name: full_name,
        email: e_mail,
        password: pass_word,
    }

    let array = JSON.parse(localStorage.getItem("array"));

    if(array === null){
        array = [];
    }

    array.push(user);

    localStorage.setItem("userArray", JSON.stringify(array));
    console.log(user);
    location.href = "../вход/index.html"
})