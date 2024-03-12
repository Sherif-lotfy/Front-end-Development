let list = document.querySelector(".list"),
  inputs = document.querySelectorAll("label"),
  listcontent = [
    "first.js",
    "second.css",
    "third.html",
    "fourth.php",
    "fifth.js",
    "sixth.css",
  ];
function theListContent(thelist) {
  for (let j = 0; j < inputs.length; j++) {
    prev = inputs[j].previousElementSibling;
    let lang = inputs[j].attributes[0].value;
    if (prev.checked) {
      for (let i = 0; i < thelist.length; i++) {
        if (lang == thelist[i].slice(thelist[i].lastIndexOf(".") + 1)) {
          thelist.splice(i, 1);
        }
      }
    }
  }
}

list.onfocus = function () {
  let newlist = [];
  for (let i = 0; i < listcontent.length; i++) {
    newlist[i] = listcontent[i];
  }
  theListContent(newlist);
  list.classList.add("newlist");
  list.innerHTML = `
  The list of files
  <ul>
    <li>
    ${newlist.join("</li><li>")}
    </li>
  </ul>
  `;
};
list.onblur = function () {
  list.classList.remove("newlist");
  list.innerHTML = "...";
};
