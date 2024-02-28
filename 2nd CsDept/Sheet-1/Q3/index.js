let Submit = document.querySelector(".submit"),
  Name = document.querySelector("input[type='text']"),
  inputs = document.querySelectorAll("input[type='checkbox']"),
  Select = document.querySelector("select"),
  Toppings = `<h3> Toppings : `;
Submit.onclick = function () {
  if (Name.value == "") {
    window.alert("El 'Name' ya 8aly !!");
  } else {
    let n = 0;
    for (i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        n++;
        Toppings += `${inputs[i].value}, `;
      }
    }
    Toppings = Toppings.slice(0, Toppings.length - 3);
    Toppings += ". <h3>";
    if (n == 0) {
      Toppings = "";
    }
    let TimeNow = new Date();
    let order = `
        <div class="order">
            <h3 id="date">${(TimeNow).toString().slice(0,24)}</h3>
            <hr>
            <br>
            <h3>Name is : ${Name.value}</h3>
            <h3>Size is : ${Select.value}</h3>
            ${Toppings}
            <div class="GoBack">Go Back</div>
        </div>`;

    document.body.innerHTML = document.body.innerHTML + order;
  }
};
document.onclick = function (e) {
  if(e.target.classList.contains("GoBack")){
    window.location.reload();
  }
} 
