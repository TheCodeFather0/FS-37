const data = [
  {
    id: 0,
    firstName: "Kamran",
    lastName: "Agayev",
    profilePhoto: "./images/pp.jpg",
  },
  {
    id: 2,
    firstName: "Kamran",
    lastName: "Agayev",
    profilePhoto: "./images/pp.jpg",
  },
  {
    id: 3,
    firstName: "Kamran",
    lastName: "Agayev",
    profilePhoto: "./images/pp.jpg",
  },
  {
    id: 4,
    firstName: "Kamran",
    lastName: "Agayev",
    profilePhoto: "./images/pp.jpg",
  },
];
const localData = JSON.parse(localStorage.getItem("users"));
// -------------------------------------------------
const usersContainer = document.querySelector("#usersContainer");
const showData = (arr) => {
  usersContainer.innerHTML = "";
  arr.forEach((user, index, arr) => {
    usersContainer.innerHTML += `<div class="user">
            <img
              src="${user.profilePhoto}"
              alt="image"
            />
            <h2>${user.firstName} ${user.lastName}</h2>
            <button>edit</button>
            <button>delete</button>
          </div>`;
  });
};
showData(localData || data);

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const profilePhoto = document.querySelector("#profilePhoto");
const addNewUserForm = document.querySelector("#addNewUserForm");

addNewUserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newUser = {
    id: new Date().getMilliseconds(),
    firstName: firstName.value,
    lastName: lastName.value,
    profilePhoto: profilePhoto.value,
  };
  if (localData) {
    localData.unshift(newUser);
    localStorage.setItem("users", JSON.stringify(localData));
  } else {
    data.unshift(newUser);
    localStorage.setItem("users", JSON.stringify(data));
  }
  showData(localData || data);
});
