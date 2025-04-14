const newTodoInp = document.querySelector("#newInp");
const addNewTodoForm = document.querySelector("#addNewTodoForm");

const todos = [
  { id: 0, ed: "js yaz", eddin: true },
  { id: 1, ed: "cerimeni ode", eddin: false },
  { id: 2, ed: "musahibeye get", eddin: false },
  { id: 3, ed: "usaglarnan gorus", eddin: false },
];

const showTodos = (arr) => {
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  arr.forEach((item, index, arr) => {
    tbody.innerHTML += `<tr class="${item.eddin ? "completed" : "notCompleted"
      }">
              <td>${item.ed}</td>
              <td><input type="checkbox" ${item.eddin ? "checked" : null
      } onchange="setCompleted('${item.id}')"/></td>
              <td>
                <button onclick="editTodo('${item.id}')">edit</button>
                <button onclick="deleteTodo('${item.id}')">delete</button>
              </td>
            </tr>`;
  });
};

const setCompleted = (id) => {
  todos.map((item) => {
    if (item.id == id) {
      item.eddin = !item.eddin;
    }
  });
  showTodos(todos);
};

const deleteTodo = (id) => {
  const isAgree = confirm("silmek isteyirisniz?");
  if (isAgree) {
    todos.forEach((item, index) => {
      if (item.id == id) {
        todos.splice(index, 1);
      }
    });
    showTodos(todos);
  }
};

const editTodo = (id) => {
  todos.map((item) => {
    if (item.id == id) {
      const newTodo = prompt("deyisdirin", item.ed);
      if (newTodo) {
        item.ed = newTodo;
        showTodos(todos);
      } else {
        alert("ae duz yaz sopullu!");
      }
    }
  });
};

const adNewTodo = (e) => {
  e.preventDefault();
  const newTodo = {
    id: new Date().getTime(),
    ed: newInp.value,
    eddin: false,
  };
  todos.unshift(newTodo);
  showTodos(todos);
  newInp.value = "";
};

addNewTodoForm.addEventListener("submit", adNewTodo);
showTodos(todos);
