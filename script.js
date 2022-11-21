let changeName = '';

changeName = () => {
    let name = document.getElementById('name').value;

    if (name.length > 1) {
        document.getElementById('name').style.opacity ='0';
        document.getElementById('intro').innerText = "Hello there, " + name;
        document.getElementById('loading').innerText = "The page is currently processing. Please be patient.";
        setTimeout(() => {
            window.location.href ='main.html';
        }, 1200);
    }
    else{
        document.getElementById('intro').innerText = "What is your name?";
    }

}

var CloseList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < CloseList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\uD83D\uDDD1");
  span.className = "delete";
  span.appendChild(txt);
  CloseList[i].appendChild(span);
}



// Click on a close button to hide the current list item
var remove = document.getElementsByClassName("delete");
var i;
for (i = 0; i < remove.length; i++) {
  remove[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



let checked = document.querySelector('ul');
checked.addEventListener("click", (ev) =>{
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

const error = document.querySelectorAll('.error');

function AddTodo(){
    let li  = document.createElement("li");
    let inputValue = document.getElementById("new-todo-input").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    let errorMessage  = false;

    if(inputValue.length < 1){
        error[0].innerText = '\u0021 You must write a task first'
        inputValue.classList.add("error");
        errorMessage = true;
    }
    else{
        document.getElementById('list').appendChild(li);
        error[0].innerText = "";
    }
    document.getElementById("new-todo-input").value =  "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\uD83D\uDDD1");
    span.className = "delete";
    span.appendChild(txt);
    CloseList[i].appendChild(span);

    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
}
}

  


