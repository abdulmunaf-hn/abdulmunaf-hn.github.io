let popupoverlay = document.querySelector(".popup-overlay");
let popupbox = document.querySelector(".popup-box");
let addpopupbutton = document.getElementById("add-popup-btn");

addpopupbutton.addEventListener("click", function(){
  popupoverlay.style.display="block"
  popupbox.style.display="block"
})

let cancelbutton = document.querySelector(".cancel-btn")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
 popupoverlay.style.display="none"
  popupbox.style.display="none"

})

//select container,submit-btn,project-name-input,project-description
let container=document.querySelector(".container")
let addprojecter=document.querySelector(".submit-btn")
let projectnemeinput=document.getElementById("project-neme-input")
let projectdescription=document.getElementById("project-description")


addprojecter.addEventListener("click",function(event){

  event.preventDefault()
  let div=document.createElement("div")
  div.setAttribute("class","project-container")
  div.innerHTML=`<h2>${projectnemeinput.value}</h2>
       <p>${projectdescription.value}</p>
       <button onclick="deleteproject(event)">Delete</button>`
         
  container.append(div)
  popupoverlay.style.display="none"
  popupbox.style.display="none"
  })

  function deleteproject(event){
    event.target.parentElement.remove()//delete the divelement
  }// parent or closesed

 ///trying to save in local storage
  let storedItem =localStorage.getItem("storedItem")

  function save(){
      var Item =document.getElementById("project-neme-input")
     
      
       localStorage.setItem("storedItem", Item)
       Document.getElementById("")
         
  }
  function get(){
    localStorage.getItem("storedItem")
    
  }

  //submit_btn create popup
  let submitpopup = document.querySelector(".submit-popup")
  let submitbutton = document.querySelector("submit-btn")

  function submitpopup(){
  submitpopup.classList.add
  }
  