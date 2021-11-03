let loginInput = document.querySelector("#loginInput");
let passwordInput = document.querySelector("#passwordInput");
let button = document.querySelector("#btn");
let div = $("#error");

let user1 =JSON.parse(localStorage.getItem("userArray"));


button.addEventListener('click', () => {
    let login = loginInput.value;
    let pass = passwordInput.value;

    for(let i = 0; i < user1.length; i++){
        if(login == user1[i].email && pass == user1[i].password){
            console.log(user1);
            location.href = "../фильтрация/index2.html"
        }
         else{
            div.append(`
                <p style="color: red;">вы не заегистрировались!</p>
            `)
        }
    }
    
   
})