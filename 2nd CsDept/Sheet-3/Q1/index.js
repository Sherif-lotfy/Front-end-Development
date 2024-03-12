let input = document.querySelector("input"),
  array = document.querySelector(".array"),
  output = document.querySelector(".output-div"),
  enter = document.querySelector(".enter"),
  theArray = [];
input.focus();
function sub() {
  if (array.textContent != "") {
    array.textContent += ", " + input.value;
  } else {
    array.textContent += input.value;
  }
  input.value = "";
}
document.querySelector("form").onsubmit = function (e) {
  e.preventDefault();
  sub();
};
input.focus();
function process() {
  let theArray = array.textContent.split(", ");
  for (let i = 0; i < theArray.length; i++) {
    let times = 1;
    for (let j = i + 1; j < theArray.length; j++) {
      if (theArray[i] == theArray[j]) {
        times++;
      }
    }
    let removed = theArray[i];
    for (let j = i + 1; j < theArray.length; j++) {
      if (theArray[j] == removed) {
        theArray.splice(j, 1);
        j--;
      }
    }
    if (times > 2) {
      theArray.splice(i, 1);
      i--;
    }
  }
  output.innerHTML = `
  your array is : [ ${array.textContent} ]<br><br>
  Output: ${theArray.join(", ")} `;
  array.textContent="";
}