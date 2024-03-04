let input = document.querySelector("input"),
  array = document.querySelector(".array"),
  output = document.querySelector(".output"),
  theArray = [];
input.focus();
function sub() {
  array.textContent += input.value + ", ";
  input.value = "";
}
document.querySelector("form").onsubmit = function (e) {
  e.preventDefault();
  sub();
};
function show() {
  let arr = array.textContent.split(", ");
  let newarr = [];
  newarr = arr
    .filter(function (e) {
      let repeated = 0;
      let newE = e.split("");
      for (let i = 0; i < newE.length - 1; i++) {
        for (let j = i + 1; j < newE.length; j++) {
          if (newE[i] == newE[j]) {
            repeated++;
          }
        }
      }
      return repeated == 0;
    });
    for(let i=0;i<newarr.length;i++){
        if(newarr[i] ==""){
            newarr.splice(i);
        }
    }
  console.log(newarr);
  if (newarr.length == 0) {
    output.textContent = `Output : there is no words w/out repeated characters.`;
  } else {
    output.textContent = `Output : ${newarr.join(", ")}.`;
  }
  console.log(newarr);
  input.textContent = "";
}
