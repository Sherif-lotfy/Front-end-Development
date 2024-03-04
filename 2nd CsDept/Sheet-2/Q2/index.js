let input = document.querySelector("input"),
output = document.querySelector(".output-div");
input.focus();
function process() {
  let inputString = input.value.split("");
  for (i = 0; inputString.length; i += 4) {
    j = i+2;
    if(j>inputString.length-1){
        break;
    }
    let x = inputString[i];
    inputString[i] = inputString[j];
    inputString[j]=x;
  }
  output.innerHTML = `Output: ${inputString.join("")}`;
  input.value = "";
}
