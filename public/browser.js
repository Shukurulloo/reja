console.log("FrontEnd ishga tushdi");

function itemTemplate(item) {
    return ` <li 
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
    >
    <span class="item-text">${item.reja}</span>
    <div>
      <button 
      data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1"
      >
        O'zgartirish
      </button>
      <button  
      data-id="${item._id}"
      class="delete-me btn btn-danger btn-sm"
      > 
      O'chirish
      </button>
    </div>
    </li>`;
}

let createField = document.getElementById("create-field");


document
.getElementById("create-form")
.addEventListener("submit", function (e) { // submit bo'sa funtion isha tushadi
    e.preventDefault(); // traditional API ni toxtadaiboshqa page o'tib ketmasligini taminlaydi

// res API
  axios // bu  axios requster bu orqali post qiliniadi
    .post("/create-item", { reja: createField.value }) // badydan yuborilgan narsani pass qiladi
    .then((response) => {
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Iltimos qaytadan harakat qiling!");
    });
});

document.addEventListener("click", function(e){
    console.log(e.target);
    // delete operatsiya
    if(e.target.classList.contains("delete-me")){
        // alert("Siz delete tugmasini bosdingiz");
        if(confirm("Aniq o'chirmoqchimisz?")) {
            // alert("Yes deb javob berildi")
            axios // endpoint
            .post("/delete-item", {id: e.target.getAttribute("data-id") })
            .then((respose) => {
                console.log(respose.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling!");
            });
        } 
        // else{
        //     alert("No deb javob berildi")
        // }
    }
    // edit operatsiya
    if(e.target.classList.contains("edit-me")) {
        // alert("siz ediz tugmasini bosdingiz");
       let userInput = prompt("O'zgartirish kiriting", 
       e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
       );
       if (userInput) {
        // console.log(userInput);
        axios
        .post("/edit-item", 
        {id: e.target.getAttribute("data-id"), 
        new_input: userInput,
         })
         .then(response => {
            console.log(response.data);
            e.target.parentElement.parentElement.querySelector(
                ".item-text"
                ).innerHTML = userInput;
         }).catch(err => {
            console.log("Iltimos qaytadan harakat qiling!");
         })
       }
    }
});

document.getElementById("clean-all").addEventListener("click", function () {
    axios.post("/delete-all", {delete_all: true}).then((respose) => {
        alert(respose.data.state);
        document.location.reload();
    }).catch(err => {
        console.log("hatolik")
    })
});
