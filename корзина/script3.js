let div = $(".wrap");

let array = JSON.parse(localStorage.getItem("cardArray"));



for(let i = 0; i < array.length; i++){
    div.append(`
        <div class="purchase">
            <h5>${array[i].name}</h5>
            <p>${array[i].price}</p>
        </div>
    `)
}