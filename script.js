//show the numbers and operations on the input space
function appendToDisplay(value){
  let display = document.getElementById('display');
  display.value += value;
}
//clears the display
function clearDisplay(){
  document.getElementById('display').value = '';
}
//clears single num or operator
function backspace(){
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}
//calculates the value in input space
function calculateResult(){
  try{
    let display = document.getElementById('display');
    display.value = eval(display.value);
  }
  catch{
    document.getElementById('display').value = 'Error';
  }
}