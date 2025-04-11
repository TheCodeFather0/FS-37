const newTodoInp = document.querySelector("#newTodoInp");
const addNewTodoForm = document.querySelector("#addNewTodoForm");

const todos = [
  { id: 0, todo: "ders oxy", isCompleted: true },
  { id: 1, todo: "dersden sonra eve get", isCompleted: false },
  { id: 2, todo: "js tekrar et", isCompleted: false },
  { id: 3, todo: "tapsiriqlari yaz", isCompleted: false },
];

const showTodos = (arr) => {
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = "";
  arr.forEach((item, index, arr) => {
    tbody.innerHTML += `<tr class="${
      item.isCompleted ? "completed" : "notCompleted"
    }">
              <td>${item.todo}</td>
              <td><input type="checkbox" ${
                item.isCompleted ? "checked" : null
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
      item.isCompleted = !item.isCompleted;
    }
  });
  showTodos(todos);
};

const deleteTodo = (id) => {
  const isAgree = confirm("silmək istədiyinizə əminsiniz?");
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
      const newTodo = prompt("deyisdirin", item.todo);
      if (newTodo) {
        item.todo = newTodo;
        showTodos(todos);
      } else {
        alert("duz emelli yaz!");
      }
    }
  });
};

const adNewTodo = (e) => {
  e.preventDefault();
  const newTodo = {
    id: new Date().getTime(),
    todo: newTodoInp.value,
    isCompleted: false,
  };
  todos.unshift(newTodo);
  showTodos(todos);
  newTodoInp.value = "";
};

addNewTodoForm.addEventListener("submit", adNewTodo);
showTodos(todos);
