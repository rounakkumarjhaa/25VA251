function result(){
    let inputValue = document.getElementById('InputData').value;

    let displayHeading = document.getElementById('text');
    displayHeading.innerHTML = inputValue;

    displayHeading.style.color = "red";

    //chagne color of body
    document.getElementsByTagName('body')[0].style.backgroundColor = "black"
}

// add Event Listner Medthod
let paraPkg = document.getElementById('para');
function colorChange(){
    paraPkg.style.backgroundColor = "#" + (Math.floor(Math.random() * 256));
}
paraPkg.addEventListener('mouseout' , colorChange);