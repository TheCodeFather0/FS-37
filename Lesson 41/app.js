const ENDPOINT = "http://localhost:3000";
const newUserRole = document.querySelector("#newUserRole");
const teachers_cards = document.querySelector("#teachers_cards");
const students_cards = document.querySelector("#students_cards");
const addNewuserForm = document.querySelector("#addNewuserForm");
const newUserUsername = document.querySelector("#newUserUsername");

// get user
const showData = (url, parent) => {
  parent.innerHTML = "";
  axios.get(ENDPOINT + url).then(({ data }) => {
    if (data && data.length > 0) {
      data.forEach(({ id, username }) => {
        parent.innerHTML += `<div class="card">
                <p>${username} <p/>
                <div>
                    <i class="fa-solid fa-user-pen zibil_qabi" onclick="editUser('${id}','${url}')"></i>
                    <i class="fa-solid fa-trash zibil_qabi" onclick="deleteUser('${id}','${url}')"></i>
                </div>
              </div>`;
      });
    } else {
      parent.innerHTML = "Məlumat tapılmadı!";
    }
  });
};

showData("/teachers", teachers_cards);
showData("/students", students_cards);
// ---------------------------------------------------------------------

// add user
addNewuserForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newuser = {
    username: newUserUsername.value,
  };

  const url = newUserRole.value == 0 ? "/teachers" : "/students";
  const parent = newUserRole.value == 0 ? teachers_cards : students_cards;

  axios.post(ENDPOINT + url, newuser).then((res) => {
    newUserUsername.value = "";
    showData(url, parent);
    Swal.fire({
      title: "Halal olsun!",
      text: "Yeni istifadəçi əlavə edildi!",
      icon: "success",
      confirmButtonText: "Bağla",
    });
  });
});

// ---------------------------------------------------------------------

// delete user
const deleteUser = (id, url) => {
  Swal.fire({
    title: "Silmək istədiyinə əminsən?",
    text: "Silsən bir daha geri qaytara bilməyəcəksən!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sil!",
    cancelButtonText: "Ləğv et",
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(ENDPOINT + url + "/" + id).then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "Silindi!",
            text: "Onu itirdik!",
            icon: "success",
          });

          if (url === "/teachers") {
            showData("/teachers", teachers_cards);
          } else if (url === "/students") {
            showData("/students", students_cards);
          }
        }
      });
    }
  });
};
// ---------------------------------------------------------------------

// edit user
const editUser = (id, url) => {
  axios.get(ENDPOINT + url + "/" + id).then(({ data }) => {
    const newData = prompt("deyismek istediyin melumati yaz!", data.username);

    if (newData) {
      const data = {
        username: newData,
      };
      axios.put(ENDPOINT + url + "/" + id, data).then((response) => {
        if (response.status === 200) {
          const parent = url === "/teachers" ? teachers_cards : students_cards;

          showData(url, parent);

          Swal.fire({
            title: "Halal olsun!",
            text: "Istifadəçi dəyişdirildi!",
            icon: "success",
            confirmButtonText: "Bağla",
          });
        }
      });
    }
  });
};
