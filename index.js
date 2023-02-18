const searchbutton = document.getElementById("btn");

const loaderIdEl = document.getElementById("loaderid");

function showLoader() {
  loaderIdEl.classList.remove("hide");
}

function removeLoader() {
  loaderIdEl.classList.add("hide");
}

function getlist() {
  showLoader();
  fetch("https://reqres.in/api/users?page=1")
    .then((data) => {
      //console.log(data);
      return data.json(); //converted to object
    })
    .then((objectData) => {
      console.log(objectData);
      let data = "";
      removeLoader();
      objectData.data.map((values) => {
        data += `<div class="card">
        <div class="imgb">
          <img src="${values.avatar}" alt="image" />
        </div>
        <div class="content">
          <div class="details">
            <h2>${values.first_name + " " + values.last_name}</h2>
            <div class="data">
              <h2>${values.email}</h2>
            </div>
          </div>
        </div>
      </div>`;
      });
      document.getElementById("users").innerHTML = data;
    });
}

searchbutton.addEventListener("click", getlist);
