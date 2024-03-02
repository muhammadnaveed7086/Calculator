const buttons = document.querySelectorAll(".btn");
const inputVal = document.querySelector(".calculator input");
const equal = document.querySelector("#btnequal");
const clearScreen=document.querySelector('#btnc')
for (const btn of buttons) {
  btn.addEventListener("click", () => {
    let finalInput = (inputVal.value += btn.innerText);
    equal.addEventListener("click", () => {
      inputVal.value = eval(finalInput);
    });
  });
}
clearScreen.addEventListener('click',()=>{
inputVal.value='';
})
