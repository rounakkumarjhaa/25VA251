function result(){
let inputValue=document.getElementById('inputdata').value;
console.log(inputValue);
let displayHeading=document.getElementById('text');
displayHeading.innerHTML=inputValue;
displayHeading.style.color="red"

// change color of body element 
document.getElementsByTagName('body')[0].style.backgroundColor="green"
}