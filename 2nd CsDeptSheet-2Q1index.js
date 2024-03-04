let input = document.querySelector("input"),
  series = document.querySelector(".series"),
  content = document.querySelector(".content"),
  theArray = [];
input.focus();
function sub() {
  if (series.textContent != "") {
    series.textContent += " - " + input.value;
  } else {
    series.textContent += input.value;
  }
  input.value = "";
}
document.querySelector("form").onsubmit = function (e) {
  e.preventDefault();
  sub();
};
function show() {
  theArray = series.textContent.split(" - ");
  console.log(theArray);
  let thePrimes = [];
  theArray.forEach(function (e) {
    if (isPrime(Number(e))) {
      thePrimes.push(e);
    }
  });
  console.log(thePrimes);
  content.innerHTML = `<h3>your List : ${theArray.join(", ")} .</h3>`;
  if (thePrimes.length == 0) {
    content.innerHTML += `<h3>Primes : there is no any prime numbers.</h3>`;
  } else {
    content.innerHTML += `<h3>Primes : ${thePrimes.join(", ")} .</h3>`;
  }
  series.textContent = "";
}
function isPrime(e) {
  for (let i = e - 1; i > 1; i--) {
    if (e % i == 0) {
      return false;
    }
  }
  return true;
}
