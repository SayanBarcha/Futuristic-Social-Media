import { Application } from "https://esm.sh/@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app.load("https://prod.spline.design/ZAMB481XbLJ-mcXU/scene.splinecode");

class SplineApp {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.app = new Application(this.canvas);
    this.currentModelUrl = null;
  }

  loadModel(modelUrl) {
    this.app.load(modelUrl);
    this.currentModelUrl = modelUrl;
  }

  getModelUrl() {
    return this.currentModelUrl;
  }
}

const mainCanvasApp = new SplineApp("canvas3d");
const canvas1App = new SplineApp("canvas1");
const canvas2App = new SplineApp("canvas2");
const canvas3App = new SplineApp("canvas3");

mainCanvasApp.loadModel(
  "https://prod.spline.design/ZAMB481XbLJ-mcXU/scene.splinecode"
);
canvas1App.loadModel(
  "https://prod.spline.design/Rv0Bn6tcfrKW-56W/scene.splinecode"
);
canvas2App.loadModel(
  "https://prod.spline.design/fn15HDyqwaw28t6d/scene.splinecode"
);
canvas3App.loadModel(
  "https://prod.spline.design/dvzqE7wqLcYerPPH/scene.splinecode"
);

function swapModels(app1, app2) {
  const model1 = app1.getModelUrl();
  const model2 = app2.getModelUrl();

  app1.loadModel(model2);
  app2.loadModel(model1);
}

document.getElementById("canvas1").addEventListener("click", function () {
  swapModels(mainCanvasApp, canvas1App);
});

document.getElementById("canvas2").addEventListener("click", function () {
  swapModels(mainCanvasApp, canvas2App);
});

document.getElementById("canvas3").addEventListener("click", function () {
  swapModels(mainCanvasApp, canvas3App);
});

const avatarBtn = document.getElementById("avatar-btn");
const addPostBtn = document.getElementById("addPostBtn");
const posts = document.querySelector(".posts");
const canvases = document.querySelector(".canvases");

let avatarClosed = true;

var tl = gsap.timeline();

function zoomAvatar() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 1000) {
    if (avatarClosed) {
      tl.to(posts, {
        duration: 0.5,
        x: "-=50%",
        opacity: "0",
        onEnter: function () {
          avatarClosed = false;
        }
      })
        .to(
          canvas,
          {
            duration: 0.5,
            x: "-=100%",
            scale: "2",
            pointerEvents: "auto"
          },
          "-=0.5"
        )
        .to(
          canvases,
          {
            duration: 0.5,
            x: "+=10%",
            opacity: "1",
            display: "flex"
          },
          "-=0.5"
        )
        .to(
          addPostBtn,
          {
            duration: 0.5,
            opacity: "0"
          },
          "-=0.5"
        )
        .to(
          avatarBtn,
          {
            duration: 0.5,
            textContent: "Save Avatar",
            onComplete: function () {
              avatarClosed = false;
            }
          },
          "-=0.5"
        );
    } else {
      tl.to(posts, {
        duration: 0.5,
        x: "+=50%",
        opacity: "1",
        onEnter: function () {
          avatarClosed = true;
        }
      })
        .to(
          canvas,
          {
            duration: 0.5,
            x: "+=100%",
            scale: "1",
            pointerEvents: "none"
          },
          "-=0.5"
        )
        .to(
          canvases,
          {
            duration: 0.5,
            x: "-=10%",
            opacity: "0",
            display: "none"
          },
          "-=0.5"
        )
        .to(
          addPostBtn,
          {
            duration: 0.5,
            opacity: "1"
          },
          "-=0.5"
        )
        .to(
          avatarBtn,
          {
            duration: 0.5,
            textContent: "Edit Avatar",
            onComplete: function () {
              avatarClosed = true;
            }
          },
          "-=0.5"
        );
    }
  } else {
    if (avatarClosed) {
      tl.to(posts, {
        duration: 0.5,
        x: "-=50%",
        opacity: "0",
        onEnter: function () {
          avatarClosed = false;
        }
      })
        .to(
          canvas,
          {
            duration: 0.5,
            y: "+=100%",
            scale: "2",
            pointerEvents: "auto"
          },
          "-=0.5"
        )
        .to(
          canvases,
          {
            duration: 0.5,
            flexDirection: "row",
            width: "100%",
            y: "+=40%",
            opacity: "1",
            display: "flex"
          },
          "-=0.5"
        )
        .to(
          addPostBtn,
          {
            duration: 0.5,
            opacity: "0"
          },
          "-=0.5"
        )
        .to(
          avatarBtn,
          {
            duration: 0.5,
            textContent: "Save Avatar",
            onComplete: function () {
              avatarClosed = false;
            }
          },
          "-=0.5"
        );
    } else {
      tl.to(posts, {
        duration: 0.5,
        x: "+=50%",
        opacity: "1",
        onEnter: function () {
          avatarClosed = true;
        }
      })
        .to(
          canvas,
          {
            duration: 0.5,
            y: "-=100%",
            scale: "1",
            pointerEvents: "none"
          },
          "-=0.5"
        )
        .to(
          canvases,
          {
            duration: 0.5,
            flexDirection: "column",
            width: "auto",
            y: "-=40%",
            opacity: "0",
            display: "none"
          },
          "-=0.5"
        )
        .to(
          addPostBtn,
          {
            duration: 0.5,
            opacity: "1"
          },
          "-=0.5"
        )
        .to(
          avatarBtn,
          {
            duration: 0.5,
            textContent: "Edit Avatar",
            onComplete: function () {
              avatarClosed = true;
            }
          },
          "-=0.5"
        );
    }
  }
}

avatarBtn.addEventListener("click", zoomAvatar);

const postsContainer = document.querySelector(".posts");

addPostBtn.addEventListener("click", createNewPost);

function createNewPost() {
  const newPost = document.createElement("div");
  newPost.classList.add("post");

  const postHeader = document.createElement("div");
  postHeader.classList.add("post-header");

  const postTitle = document.createElement("div");
  postTitle.classList.add("post-title-p");

  const postTitleInput = document.createElement("input");
  postTitleInput.classList.add("editable", "post-title-input");
  postTitleInput.setAttribute("type", "text");
  postTitleInput.setAttribute("placeholder", "Enter title");

  const linesDiv = document.createElement("div");
  linesDiv.classList.add("lines");

  const postUserBtn = document.createElement("button");
  postUserBtn.classList.add("btn", "post-user");
  postUserBtn.innerHTML =
    '<span>juxtopposed<svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9.99219" width="7.06071" height="7.06071" rx="1" transform="rotate(45 9.99219 0)" fill="#FFF093" /></svg>0 stars</span>';

  const postText = document.createElement("textarea");
  postText.classList.add("editable", "post-text");
  postText.setAttribute("placeholder", "Enter text");

  const deleteBtn = document.createElement("div");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = `
      <svg class="delete-icon" width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_44_192)">
        <rect x="20.7383" y="0.12132" width="30.4191" height="30.4191" rx="7.5" transform="rotate(45 20.7383 0.12132)" stroke="#FFF093" stroke-width="3"/>
        <path d="M31 22L10 22" stroke="#FFF093" stroke-width="3.40541"/>
        </g>
        <defs>
        <clipPath id="clip0_44_192">
        <rect width="42" height="43" fill="white"/>
        </clipPath>
        </defs>
        </svg>

      `;
  deleteBtn.addEventListener("click", () => removePost(newPost));

  postTitle.appendChild(postTitleInput);
  postHeader.appendChild(postTitle);
  postHeader.appendChild(linesDiv);
  postHeader.appendChild(postUserBtn);
  newPost.appendChild(deleteBtn);

  newPost.appendChild(postHeader);
  newPost.appendChild(postText);

  postsContainer.insertBefore(newPost, postsContainer.firstChild);
}

function removePost(post) {
  post.remove();
}
