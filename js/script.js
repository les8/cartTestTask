function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

let sum = 0
const item= [...document.getElementsByClassName("item")]
const button = [...document.getElementsByClassName("button")]  
const sumLoc = document.getElementById("sum")
sumLoc.textContent = sum

button.forEach((element, index) => {
    element.addEventListener("click", function(){
        money(parseInt(item[index].textContent), element)
    })
});

function money(a, b){
    sum = sum + a
    sumLoc.textContent = sum
    b.textContent = "Добавлено"
    b.classList.add("back")
}