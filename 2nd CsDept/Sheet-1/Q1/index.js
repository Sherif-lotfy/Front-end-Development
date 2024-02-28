let field1 = document.querySelector(".field1"),
  input = document.querySelector("input"),
  Sign = document.querySelector(".sign"),
  equal = document.querySelector(".equal");
input.focus();
function up() {
  if (input.value != "") {
    let v1 = input.value;
    field1.textContent = v1;
  }
  input.value = "";
}
document.querySelectorAll(".operation").forEach(function (e) {
  e.onclick = function () {
    if (field1.textContent != "") {
      operations();
      input.value = "";
    } else {
      up();
    }
    Sign.textContent = e.textContent;
    input.focus();
  };
});
document.querySelector(".AC").onclick = function () {
  input.value = "";
  field1.textContent = "";
  Sign.textContent = "";
  input.focus();
};
function operations() {
  if (Sign.textContent == "+") {
    field1.textContent = `  
        ${Number(field1.textContent) + Number(input.value)}
    `;
  } else if (Sign.textContent == "-") {
    field1.textContent = `  
        ${Number(field1.textContent) - Number(input.value)}
    `;
  } else if (Sign.textContent == "*") {
    field1.textContent = `  
        ${Number(field1.textContent) * Number(input.value)}
    `;
  } else if (Sign.textContent == "/") {
    field1.textContent = `  
        ${Number(field1.textContent) / Number(input.value)}
    `;
  } else if (Sign.textContent == "%") {
    field1.textContent = `  
        ${Number(field1.textContent) % Number(input.value)}
    `;
  }
}
equal.onclick = function () {
    if(field1.textContent != "") {
      operations();
      input.value = Number(field1.textContent);
      field1.textContent ="";
  }
  Sign.textContent = "=";
};
window.onload = function () {
  input.focus();
}