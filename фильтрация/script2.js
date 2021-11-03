let phones = document.querySelectorAll(".phones");
let button = document.querySelector("#btn");

for(let i = 0; i < phones.length; i++){
    phones[i].addEventListener('click', (event) => {
        let eventElements = event.currentTarget;
        let name = eventElements.children[1].children[0].innerHTML;
        let price = eventElements.children[1].children[1].innerHTML;
        let site = eventElements.children[1].children[2].innerHTML;

        let item = {
            name: name,
            price: price,
            site: site
        }

        let array = JSON.parse(localStorage.getItem("cardArray"));
        if(array === null){
            array = [];
        }

        array.push(item);
        localStorage.setItem("cardArray",JSON.stringify(array));
        console.log(array);
    })


    button.addEventListener('click', () => {
        location.href = "../корзина/index3.html"
    })
}


