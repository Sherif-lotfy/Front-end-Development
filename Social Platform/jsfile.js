let i = 0; //NumberOfPosts
let postObject = {
  text: "New Image",
  isThereImage: false,
  imgSrc: "#",
};
let insidePost = `
  <div class="post__header">
    <i class="material-icons sidebar__topAvatar"> account_circle </i>
    <div class="post__info">
      <h2>Somanath Goudar</h2>
      <p>Job Description</p>
      <div class="options" tabindex="0">
        <i class="material-icons">more_horiz</i>
      </div>
    </div>
  </div>
  <div>
    <pre class="p"> </pre>
    <img src="#" class="im hide"/>
  </div>
  <div class="feed__inputOptions">
    <div class="inputOption likeBtn">
      <i class="material-icons icolor"> thumb_up </i>
      <h4>Like</h4>
    </div>
    <div class="inputOption commentBtn">
      <i class="material-icons icolor"> comment </i>
      <h4>comment</h4>
    </div>
    <div class="inputOption shareBtn">
      <i class="material-icons icolor"> share </i>
      <h4>share</h4>
    </div>
    <div class="inputOption">
      <i class="material-icons icolor"> send </i>
      <h4>send</h4>
    </div>
  </div>
  `;
for (let j = 1; j <= localStorage.i; j++) {
  CreatePost();
  let p = JSON.parse(localStorage[`p${i}`]);

  document.getElementById(`p${i}`).children[1].children[0].textContent = p.text;
  if (p["isThereImage"] == true) {
    document.getElementById(
      `p${i}`
    ).children[1].children[1].attributes[0].value = p["imgSrc"];
    document.querySelector(".im").classList.remove("hide");
  }
}
function CreatePost() {
  let post = document.createElement("div");
  post.classList.add("post");
  post.setAttribute("id", `p${i + 1}`);
  post.setAttribute("tabindex", "0");
  post.innerHTML = insidePost;
  let feed = document.getElementById("theFeed");
  feed.prepend(post);
  i++;
}

function React() {
  // Like ...
  let like = document.querySelectorAll(".likeBtn");
  like.forEach(function (e) {
    e.onclick = function () {
      e.classList.toggle("like");
      if (e.classList.contains("like")) {
        window.localStorage[
          `${e.parentElement.parentElement.attributes[1].value}-like`
        ] = true;
      } else {
        window.localStorage[
          `${e.parentElement.parentElement.attributes[1].value}-like`
        ] = false;
      }
    };
  });
  //Share ...
  let share = document.querySelectorAll(".shareBtn");
  share.forEach(function (e) {
    e.onclick = function () {
      window.open(""); // _blank ...
    };
  });

  // Comment ...
  let comment = document.querySelectorAll(".commentBtn");
  comment.forEach(function (e) {
    e.onclick = function () {
      let comment1 = prompt(
        `Leave your comment here \n All the comment you will find it in the console`
      );
      console.log(
        `There is a comment : "${comment1}" on the Post Number : ${e.parentElement.parentElement.attributes[1].value.slice(
          1
        )}`
      );
    };
  });
  document.querySelectorAll(".options").forEach(function (e) {
    let options = `
  <div class="insideDiv" id="delete_option"><i class="material-icons">delete</i>Delete</div>
  <div class="insideDiv edit_option"><i class="material-icons">edit</i>Edit</div>
  `;
    e.onfocus = function () {
      e.classList.add("newOptions");
      e.innerHTML = options;
      //Delete
      let deleteOption = document.getElementById("delete_option");
      deleteOption.onclick = function () {
        let deletedOne =
          deleteOption.parentElement.parentElement.parentElement.parentElement.attributes[1].value.slice(
            1
          );
        let posts = document.querySelectorAll(".post");
        let newposts = [];
        for (let j = 0; j < posts.length; j++) {
          newposts[j] = posts[+(posts.length - 1) - j];
        }
        for (let j = deletedOne; j < i; j++) {
          localStorage[`p${j}`] = localStorage[`p${+j + 1}`];
          localStorage[`p${j}-like`] = localStorage[`p${+j + 1}-like`];
          newposts[j].attributes[1].value = `p${j}`;
        }
        localStorage[`p${i}`] = "";
        i--;
        localStorage.i = i;
        deleteOption.parentElement.parentElement.parentElement.parentElement.remove();
      };

      //Edit
      let editOption = document.querySelectorAll(".edit_option");
      editOption.forEach(function (e) {
        e.onclick = function () {
          let onEditPost =
            e.parentElement.parentElement.parentElement.parentElement;
          onEditPost.innerHTML = `
            <div class="post__header">
              <i class="material-icons sidebar__topAvatar"> account_circle </i>
              <div class="post__info">
                <h2>Somanath Goudar</h2>
                <p>Job Description</p>
              </div>
            </div>
            <div>
            <textarea id="txtEditor">${onEditPost.children[1].children[0].textContent}</textarea>
              <img src="#" class="im hide"/>
            </div>
            <div class="onEdit">
              <div class="sbBtns" id="OkBtn" OkBtn onclick="okBtnfun()">OK</div>
              <div class="sbBtns" cancelBtn>Cancel</div>
            </div>
            `;
          //okBtn
        };
      });
    };
    document.querySelectorAll(".options").forEach(function (e) {
      let options = `<i class="material-icons">more_horiz</i>`;
      e.onblur = function () {
        e.classList.remove("newOptions");
        e.innerHTML = options;
      };
    });
  });
}
//Edit
document.onclick = function (e) {
  let ele = e.target;
  if (ele.hasAttribute("cancelBtn")) {
    thePost = ele.parentElement.parentElement;
    thePost.innerHTML = insidePost;
    let postId = thePost.attributes[1].value;
    let p = JSON.parse(localStorage[`${postId}`]);
    thePost.children[1].children[0].textContent = p.text;
    if (p["isThereImage"] == true) {
      thePost.children[1].children[1].attributes[0].value = p["imgSrc"];
      thePost.children[1].children[1].classList.remove("hide");
    }
  }
  // else if (ele.hasAttribute("OkBtn")) {
  //   let textAfterEdit = document.getElementById("txtEditor").value;
  //   thePost = ele.parentElement.parentElement;
  //   thePost.innerHTML = insidePost;
  //   let postId = thePost.attributes[1].value;
  //   let p = JSON.parse(localStorage[`${postId}`]);
  //   thePost.children[1].children[0].textContent = textAfterEdit;
  //   p.text = textAfterEdit;
  //   localStorage[`${postId}`] = JSON.stringify(p);
  //   if (p["isThereImage"] == true) {
  //     thePost.children[1].children[1].attributes[0].value = p["imgSrc"];
  //     thePost.children[1].children[1].classList.remove("hide");
  //   }
  // }
  React();
  likeAndDislick();
};
function okBtnfun() {
  let textAfterEdit = document.getElementById("txtEditor").value;
  thePost = document.getElementById("OkBtn").parentElement.parentElement;
  thePost.innerHTML = insidePost;
  let postId = thePost.attributes[1].value;
  let p = JSON.parse(localStorage[`${postId}`]);
  thePost.children[1].children[0].textContent = textAfterEdit;
  p.text = textAfterEdit;
  localStorage[`${postId}`] = JSON.stringify(p);
  if (p["isThereImage"] == true) {
    thePost.children[1].children[1].attributes[0].value = p["imgSrc"];
    thePost.children[1].children[1].classList.remove("hide");
  }
  React();
  likeAndDislick();
}

function SavePost() {
  let text = document.getElementById(`p${i}`).children[1].children[0]
    .textContent;
  let imgSrc = document.getElementById(`p${i}`).children[1].children[1]
    .attributes[0].value;
  let p = Object.create(postObject);
  p.text = text;
  p.isThereImage = false;
  p.imgSrc = "#";
  if (imgSrc != "#" && imgSrc != "img/") {
    p.isThereImage = true;
    p.imgSrc = imgSrc;
  }
  localStorage[`p${i}`] = JSON.stringify(p);

  localStorage.i = i;
}
document.getElementById("inputText").onsubmit = function (e) {
  e.preventDefault();
  let paragraph = this.children[0].value;
  let imgSrc = document.getElementById("hiddenInput").value;
  if (paragraph != "" || imgSrc != "") {
    CreatePost();
    let paragraph = document.querySelector(".p");
    paragraph.textContent = this.children[0].value || "New Image";
    let img = document.querySelector(".im");
    if (imgSrc != "") {
      imgSrc = imgSrc.slice(12);
      img.attributes[0].value = `img/${imgSrc}`;
      img.classList.remove("hide");
    }
    let addedImage = document.getElementById("addedImage");
    addedImage.innerHTML = ``;
    document.getElementById("text").value = "";
    document.getElementById("hiddenInput").value = "";
  }
  React();
  SavePost();
};
document.getElementById("btn").onclick = function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
window.onscroll = function () {
  if (scrollY >= 300) {
    document.getElementById("btn").classList.remove("hide");
  } else {
    document.getElementById("btn").classList.add("hide");
  }
};
// Mode btn ...
let modeBtn = document.getElementById("modeBtn");
function mode() {
  if (localStorage.mode == "Dark") {
    document.getElementById("mode").attributes[1].value = "css/darkmode.css";
    modeBtn.children[0].textContent = " light_mode ";
    modeBtn.children[1].textContent = "Light Mode";
  } else {
    document.getElementById("mode").attributes[1].value = "css/lightmode.css";
    modeBtn.children[0].textContent = " mode_night ";
    modeBtn.children[1].textContent = "Dark Mode";
  }
}
modeBtn.onclick = function () {
  if (
    document.getElementById("mode").attributes[1].value == "css/lightmode.css"
  ) {
    localStorage.mode = "Dark";
  } else {
    localStorage.mode = "Light";
  }
  document.body.style = `transition:0.3s`;
  mode();
};
window.onload = function () {
  likeAndDislick();
  React();
  mode();
};
document.getElementById("hiddenInput").onchange = function () {
  let addedImage = document.getElementById("addedImage");
  addedImage.innerHTML = `<i class="material-icons">tag</i><p>img/${this.value.slice(
    12
  )}</p>`;
};
function likeAndDislick() {
  for (let j = 0; j < i; j++) {
    if (localStorage[`p${j + 1}-like`] == "true") {
      document
        .getElementById(`p${j + 1}`)
        .children[2].children[0].classList.add("like");
    }
  }
}
