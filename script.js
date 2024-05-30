function getTime() {
  let inputField = document.getElementById("time");
  let myTime = inputField.value;
  console.log(myTime);
  let result = document.getElementById("result");
  let textString = "You inputted " + myTime;
  result.innerText = textString;
}
