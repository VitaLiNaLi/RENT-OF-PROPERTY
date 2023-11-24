// //Buttons
const addBtn = document.querySelector(".addBtn");
const addBtnSec = document.querySelector(".addBtnSec");
const changeBtnSecond = document.querySelector(".changeBtnSecond");

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

      const res = await fetch(`/${delBtn.dataset.id}/delete`, {
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

      const res = await fetch(`/offcanvas`, {
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

    const response = await fetch("/update", {
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

    const response = await fetch("/update", {
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

    const response = await fetch("/add", {
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
      // // feedback.style.display = "block";

      // return changeBtn.insertAdjacentHTML("beforeend", data.html);
    }
  });
}


// if (addBtnSec) {
//   addBtn.addEventListener("click", async (event) => {
//     console.log("1----------");
//     const { description, name, price } = event.target;

//     const res = await fetch('/add', {
//       method: "POST",
//       headers: { "Content-Type": "Application/json" },
//       body: JSON.stringify({
//         name: name.value,
//         price: price.value,
//         description: description.value,
//       }),
//     });
//     const data = await res.json();
//     console.log(data);
//     return insertPoint.insertAdjacentHTML("afterend", data.html);
//   });
// }

// const pictureData=[...url.files]
// const dataFile=new FormData():
// pictureData.forEach(img=>{
//   dataFile.append('homesImg', img)
// })
// dataFile.append()

// const res=await fetch('api/products',{
//   method:'Post'
//   body: dataFile
// })
