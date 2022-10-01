var list = [];
document.getElementById("addtext").addEventListener("keyup", (e) => {
  if (e.target.value == "") {
    document.getElementById("addbtn").disabled = true;
  } else {
    document.getElementById("addbtn").disabled = false;
  }
});
function addTodo() {
  let todos = document.getElementById("addtext");

  let todosObj = {
    createdAt: new Date(),
    title: todos.value,
    status: false,
  };
  list.push(todosObj);
  // console.log(list)
  // document.getElementById('addbtn').disabled = true;
 
  showitem();
  todos.value = "";
  document.getElementById("addbtn").disabled = true;
}
var input = document.getElementById("addtext");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    document.getElementById("addbtn").click();
  }
});
let container = document.getElementsByClassName("container")[0];
function showitem() {
  container.innerHTML = "";
  list.forEach(function (item, ind) {
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class", "new-element form-check");
    var textSpan = document.createElement("span");
    var newLine = document.createElement("hr");
    textSpan.style.float = "left";
    textSpan.setAttribute("class", "text-span");
    var newspan = document.createElement("span");
    newspan.setAttribute("class", "newspan");
    var iconspan = document.createElement("span");
    iconspan.setAttribute("class", "icons-span");
    var dltbtn = document.createElement("i");
    dltbtn.setAttribute("class", "bi bi-trash dltbtn");
    var editbtn = document.createElement("i");
    editbtn.setAttribute("class", "bi bi-pencil-square edtbtn");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.setAttribute("id", "line-checkBox-" + ind);
    checkBox.setAttribute("class", "form-check-input checking");
    checkBox.style.float = "unset";
    textSpan.innerText = item.title;
    newspan.innerText = item.createdAt.toLocaleTimeString();
    // dltbtn.innerHTML = "DELETE"
    // editbtn.innerHTML = "EDIT"
    container.appendChild(newdiv);
    container.appendChild(newLine);
    newdiv.appendChild(textSpan);
    newdiv.appendChild(newspan);
    newdiv.appendChild(iconspan);
    iconspan.appendChild(checkBox);
    iconspan.appendChild(editbtn);
    iconspan.appendChild(dltbtn);

    dltbtn.addEventListener("click", function () {
      list.splice(ind, 1);
      showitem();
    });

    // showitem()
    editbtn.addEventListener("click", function () {
      var newValue = prompt("lets edit a task");
      console.log(newValue);
      item.title = newValue;
      showitem();
    });
    // checkBox.addEventListener('click', function(arrg){
    //   console.log(line-checkBox.value)
    //   if (line-checkBox.value) {
    //     item.title.style.textDecoration = "line-through";
    // } else {item.title.style.textDecoration = "none";}

    // })

    function getVal(check) {
      if (check.checked) {
        return "line-through 3.5px #f25c2a";
      } else {
        return "none";
      }
    }
    checkBox.addEventListener("change", function () {
      var checkBox2 = document.getElementById("line-checkBox-" + ind);
      // newdiv.style.textDecoration = checkBox2.checked ? 'line-through' : 'none';
      textSpan.style.textDecoration = getVal(checkBox2);
      newspan.style.textDecoration = getVal(checkBox2);
    });
    // alert('dfcfc')
  });
  // showitem()
}
showitem();
