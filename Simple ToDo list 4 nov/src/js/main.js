// Lägga till ett "X" i hela listan för att kunna stänga ett element
let myNodelist = document.getElementsByTagName("li");

for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Skapa en ny ToDo och kolla att det inte är blankt då Alert samt lägga till "X"
// för att kunna ta bort
function newToDo() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("inputField").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Ingen ny att göra angiven!");
    } else {
      document.getElementById("toDoCon").appendChild(li);
      li.classList.add('paragraph_styling')
    }
    document.getElementById("inputField").value = "";
  
    
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        //alert("Ta bort");
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  
  
  
 // Klick på "X" för att ta bort
let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
} 

// Till CSS done när markerar som genomstruket och färg
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('done');
  }
}, false);

