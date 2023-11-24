// //Buttons
const addBtn = document.querySelector(".addBtn");
const addBtnSec = document.querySelector(".addBtnSec");
const changeBtnSecond = document.querySelector(".changeBtnSecond");
const mapBtn = document.querySelector(".mapBtn");
console.log(mapBtn);

// Forms
const formUpdate = document.querySelector("#formUpdate");
const formUpdateS = document.querySelector("#formUpdateSecond");
const formAddS = document.querySelector("#formAddSecond");
console.log(formAddS);


// const Offcanvas = require("../../components/Offcanvas");

// Sections

const feedback = document.querySelector("#feedback");
const insertPoint=document.querySelector("#hereIn")

// Modals
const modal = document.querySelector(".ProductCard");
// -------------------------------------------------------------------
//delete
if (modal) {
  modal.addEventListener("click", async (event) => {
    if (event.target.classList.contains("deleteBtn")) {
      const delBtn = event.target.closest(".deleteBtn");
      const card = event.target.closest(".accordion");
      console.log(delBtn, "--------");

router.use('/admin', adminApiRouter);
      const res = await fetch(`/admin/${delBtn.dataset.id}/delete`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.message === "запись удалена") {
        card.remove();
      } else {
        feedback.textContent = data.message;
      }
    }
  });
}

// -------------------------------------------------------------------
//offcanvas update
if (modal) {
  modal.addEventListener("click", async (event) => {
    event.stopPropagation();
    if (event.target.classList.contains("changeBtn")) {
      const changeBtn = event.target.closest(".changeBtn");
      // console.log(changeBtn);
      const old = document.querySelector("#offcanvasExample");
      old.remove();

      const res = await fetch(`/admin/offcanvas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: `${changeBtn.dataset.id}`,
          name: `${changeBtn.dataset.name}`,
          description: `${changeBtn.dataset.description}`,
          price: `${changeBtn.dataset.price}`,
        }),
      });
      const data = await res.json();
      // changeBtn.insertAdjacentHTML("beforeend", data.html);
      // feedback.style.display = "block";

      return insertPoint.insertAdjacentHTML("beforeend", data.html);
    }
  });
}

// -------------------------------------------------------------------
//update
if (formUpdate) {
  formUpdate.addEventListener("submit", async (event) => {
    event.preventDefault();

    const { id, description, name, price } = event.target;

    const response = await fetch("/admin/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id.value,
        name: name.value,
        description: description.value,
        price: price.value,
      }),
    });

    const data = await response.json();

    if (data.updated) {
      window.location.href = data.url;

      // const data = await res.json();
      // // changeBtn.insertAdjacentHTML("beforeend", data.html);
      // // feedback.style.display = "block";

      // return changeBtn.insertAdjacentHTML("beforeend", data.html);
    }
  });
}

// -------------------------------------------------------------------
//update second
if (formUpdateS) {
  formUpdateS.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log('innnnnn');

    const { id, description, name, price } = event.target;

    const response = await fetch("/admin/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id.value,
        name: name.value,
        description: description.value,
        price: price.value,
      }),
    });

    const data = await response.json();

    if (data.updated) {
      insertPoint.insertAdjacentHTML("afterend", data.html);
      console.log(data.message);
      // // feedback.style.display = "block";

      // return changeBtn.insertAdjacentHTML("beforeend", data.html);
    }
  });
}


// -------------------------------------------------------------------
//add place

if (formAddS) {
  formAddS.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log('here');

    const { description, name, price } = event.target;

    const response = await fetch("/admin/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        description: description.value,
        price: price.value,
      }),
    });

    const data = await response.json();

    if (data.updated) {
      insertPoint.insertAdjacentHTML("afterend", data.html);
      console.log(data.message);

    }
  });
}

// -------------------------------------------------------------------
//add placemark to map

// if (modal) {
//   modal.addEventListener("click", async (event) => {
//     console.log('88888888');
//     if (event.target.classList.contains("mapBtn")) {
// const coordinates=mapBtn.dataset.coor
//       console.log(delBtn, "mapppp");
//       ymaps.ready(init);
// function init(coor) {
//   var myMap = new ymaps.Map("map", {
//     center: [59.929180, 30.288107],
//     zoom: 7,
//   });
// }



var placemark = new ymaps.Placemark(
  coordinates.split(', '), {
 
  }, {
      'preset': 'islands#redDotIcon'
  }
);

myMap.geoObjects.add(placemark);



    }
  });
}



