let finder = document.querySelector(".btn"),
  input = document.querySelector("input"),
  column2 = document.querySelector(".c2");

finder.onclick = function(){
    if(Number(input.value) >0){
        factorFinder(Number(input.value));
    }
}

function factorFinder(n) {
  let numberOfFacts = 0;
  column2.innerHTML = `<div class="factors">Factors</div>`;
  for (let i = n; i > 0; i--) {
    if (n % i == 0) {
      let factor = `<hr><div class="factors">${i}</div>`;
      column2.innerHTML = column2.innerHTML + factor;
      numberOfFacts++;
    }
  }
  if (numberOfFacts % 2 == 0) {
      document.querySelector(".c2").classList.remove("odd");
    document.querySelector(".c2").classList.add("even");

  } else {
      document.querySelector(".c2").classList.remove("even");
    document.querySelector(".c2").classList.add("odd");

  }
}
