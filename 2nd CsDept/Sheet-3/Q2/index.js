let p = document.querySelectorAll("p");
p.forEach(function (e) {
  e.onmouseenter = () => {
    for (let i = 0; i < e.children.length; i++) {
      e.children[i].style = `
    color:plum;
    border: 1px magenta dashed;`;
    }
  };
  e.onmouseleave = () => {
    for (let i = 0; i < e.children.length; i++) {
      e.children[i].style = "";
    }
  };
});
