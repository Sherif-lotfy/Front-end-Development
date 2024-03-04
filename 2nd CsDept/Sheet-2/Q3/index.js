let Name = document.querySelector("#name"),
  age = document.querySelector("#age"),
  gpa = document.querySelector("#gpa"),
  textarea = document.querySelector(".textarea"),
  sortby = document.querySelector("select");
let numberOfStudents = 0;
function add() {
  let st = `<div class="st"><div>${Name.value}</div> - <div>${age.value}</div> - <div>${gpa.value}</div></div>`;
  textarea.innerHTML += st;
  numberOfStudents++;
  Name.value = age.value = gpa.value = "";
  sort();
  let warning =0;
  if(Number(gpa.value) >2) {
    warning++;
  } 
  if(warning ==3){
    window.alert("L2");
  }
}
function sort() {
  let students = document.querySelectorAll(".st");
  if (sortby.value == "Name(Ascending)"){
    for(let i=0;i<numberOfStudents-1;i++){
        for(let j=0;j<numberOfStudents;j++){
            if(students[i].children[0].textContent >students[j].children[0].textContent);
            let x = document.querySelectorAll(".st")[i].innerHTML;
            document.querySelectorAll(".st")[i].innerHTML = document.querySelectorAll(".st")[j].innerHTML;
            document.querySelectorAll(".st")[j].innerHTML = x;

        }
    }
  } else {
    for(let i=0;i<numberOfStudents-1;i++){
        for(let j=0;j<numberOfStudents;j++){
            if(students[i].children[2].textContent >students[j].children[2].textContent);
            let x = document.querySelectorAll(".st")[i].innerHTML;
            document.querySelectorAll(".st")[i].innerHTML = document.querySelectorAll(".st")[j].innerHTML;
            document.querySelectorAll(".st")[j].innerHTML = x;
        }
    }
  }
}