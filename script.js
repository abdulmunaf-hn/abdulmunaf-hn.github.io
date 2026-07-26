let popupoverlay = document.querySelector(".popup-overlay");
let popupbox = document.querySelector(".popup-box");
let addpopupbutton = document.getElementById("add-popup-btn");

addpopupbutton.addEventListener("click", function (event) {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

let cancelbutton = document.querySelector(".cancel-btn");
cancelbutton.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

//select container,submit-btn,project-name-input,project-description
let container = document.querySelector(".container");
let addprojecter = document.querySelector(".submit-btn");
let projectnemeinput = document.getElementById("project-neme-input");
let projectdescription = document.getElementById("project-description");

addprojecter.addEventListener("click", function (event) {
  event.preventDefault();
  let div = document.createElement("div");
  div.setAttribute("class", "project-container");
  div.innerHTML = `<h2>${projectnemeinput.value}</h2>
       <p>${projectdescription.value}</p>
       <button onclick="deleteproject(event)">Delete</button>`;

  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

function deleteproject(event) {
  event.target.parentElement.remove(); //delete the divelement
} // parent or closesed

let openBtn = document.getElementById("open");
let addcontainer = document.querySelector(".add-container");
let closeBtn = document.getElementById("close");

openBtn.addEventListener("click", () => {
  addcontainer.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  addcontainer.classList.remove("show");
});

//home-page cv button

function cvalert(msg) {
  alert(msg);
}

//contact sendmsg button
function sendbutton(msg) {
  alert(msg);
}
