let mode = document.getElementById("mode"),
  modeD = document.getElementById("modeD"),
  text = document.getElementById("text"),
  cssfile = document.getElementsByTagName("link")[1],
  menuIcon = document.getElementById("menuBtn"),
  menuBtn = document.getElementById("menuBtn"),
  menu = document.getElementById("menu"),
  op = document.querySelectorAll(".op"),
  singleOp = document.querySelectorAll(".singleOp"),
  ans = (opSign = document.getElementById("opSign")),
  num = document.querySelectorAll(".num"),
  val = document.getElementById("val"),
  field = [document.getElementById("h1"), document.getElementById("h2")];

document.body.style = `background-color : ${localStorage.color}`;
modeD.onclick = function () {
  if (mode.attributes[2].value === "LightMode") {
    localStorage.color = "black";
  } else if (mode.attributes[2].value === "DarkMode") {
    localStorage.color = "white";
  }
  document.body.style = `background-color : ${localStorage.color}`;
  modeDFunction();
};
function modeDFunction() {
  if (localStorage.color === "white") {
    mode.setAttribute("src", "img/DarkMode.png");
    mode.setAttribute("alt", "DarkMode");
    cssfile.setAttribute("href", "css/LightMode.css");
    text.textContent = "Dark Mode";
    menuIcon.setAttribute("src", "img/blackMenuIcon.png");
    mode.attributes[2].value = "LightMode";
  } else {
    mode.setAttribute("src", "img/LightMode.png");
    mode.setAttribute("alt", "LightMode");
    cssfile.setAttribute("href", "css/DarkMode.css");
    text.textContent = "Light Mode";
    menuIcon.setAttribute("src", "img/whiteMenuIcon.png");
    mode.attributes[2].value = "DarkMode";
  }
}
window.onload = modeDFunction();

menuBtn.onclick = function () {
  menuBtn.classList.toggle("menuBtnAfter");
  menu.classList.toggle("menuAfter");
};
function fix(e) {
  e = parseFloat(e).toFixed(2);
  if (e - Math.trunc(e) == 0) return Math.trunc(e);
  if (e - parseFloat(e).toFixed(1) == 0) return parseFloat(e).toFixed(1);
  return e;
}
function fact(e) {
  e = Math.trunc(e);
  if (e < 0) return "Math Error";
  let result = 1;
  for (let i = e; i > 1; i--) {
    result *= i;
  }
  return result;
}
let operation = function (e1, e2, sign) {
  if (sign == "+") return fix(e1 + e2);
  if (sign == "-") return fix(e1 - e2);
  if (sign == "*") return fix(e1 * e2);
  if (sign == "/") return fix(e1 / e2);
  if (sign == "%") return e1 % e2;
  if (sign == "Pow") return fix(e1 ** e2);
  if (sign == "P") {
    if (e1 < 0 || e2 < 0) return "Math Error";
    return fact(e1) / fact(e1 - e2);
  }
  if (sign == "C") {
    if (e1 < 0 || e2 < 0) return "Math Error";
    return fact(e1) / (fact(e1 - e2) * fact(e2));
  }
};
let singleOperation = function (e, sign) {
  if (sign === "fact") return fact(e);
  if (sign === "Abs") return e < 0 ? -e : e;
  if (sign === "Del")
    return e == "0" ? e : Number(e.toString().slice(0, length - 1));
  if (sign === "AC") return 0;
};
function rmv() {
  field[0].setAttribute("class", "s1");
  opSign.setAttribute("class", "s1");
}
function adS() {
  field[0].removeAttribute("class");
  opSign.removeAttribute("class");
}
rmv();
num.forEach(function (e) {
  e.onclick = function () {
    field[1].textContent === "0" && e.textContent !== "."
      ? (field[1].textContent = e.textContent)
      : (field[1].textContent = field[1].textContent + e.textContent);
  };
});
op.forEach(function (e) {
  e.onclick = function () {
    if (field[0].hasAttribute("class")) {
      field[0].textContent = field[1].textContent;
      adS();
    } else {
      field[0].textContent = operation(
        Number(field[0].textContent),
        Number(field[1].textContent),
        opSign.textContent
      );
    }
    opSign.textContent = e.textContent;
    field[1].textContent = 0;
  };
});
val.onclick = function () {
  if (field[0].hasAttribute("class")) {
    field[1].textContent = field[1].textContent;
  } else {
    field[1].textContent = operation(
      Number(field[0].textContent),
      Number(field[1].textContent),
      opSign.textContent
    );
    if (field[1] == 0) h[1] = "0";
    rmv();
    field[0].textContent = 0;
  }
};
singleOp.forEach(function (e) {
  e.onclick = function () {
    console.log(e.textContent);
    field[1].textContent = singleOperation(
      Number(field[1].textContent),
      e.textContent
    );
  };
});
