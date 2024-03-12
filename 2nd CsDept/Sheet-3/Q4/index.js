let text = document.querySelector("#text"),
  number = document.querySelector("#number"),
  output = document.querySelector(".output");
function process() {
  if (number.value == "" || number.value == 0) {
    window.alert("number =0 and that is not posible");
  } else {
    let newarray = [];
    let newarraylength = Math.ceil(text.value.length / number.value);
    for (let i = 0, j = 0; i < newarraylength; i++, j += Number(number.value)) {
      newarray[i] = text.value.slice(j, j + Number(number.value));
    }
    output.innerHTML += `<div class="result">[ ${newarray.join(", ")} ]</div>`;
    number.value = text.value = "";
  }
}
