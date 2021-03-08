function showHide() {
    var x = document.getElementById("list");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 

const addButton = document.getElementById('add');
const toDoContainer = document.getElementById('todo');
const inputField = document.getElementById('input');

addButton.addEventListener('click', function(){
    const text = document.createElement('p')
    text.innerText = inputField.value;
    toDoContainer.appendChild(text);
    inputField.value = '';
    text.addEventListener('click', function(){
        text.style.textDecoration = 'line-through';
    })
    text.addEventListener('dblclick', function(){
        toDoContainer.removeChild(text);
    })
})