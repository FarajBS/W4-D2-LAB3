const url = "https://66e8036bb17821a9d9daf500.mockapi.io/yourImg";
const cont = document.getElementById('container'); 

let btn = document.getElementById("add");
let btn2 = document.getElementById("delete");
let input = document.getElementById("btnAdd");
let input2 = document.getElementById("src");



btn.addEventListener("click", () => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          name: input.value,
          img: input2.value
        }),

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => {
            location.reload();
        });
});

fetch(url)
.then((response) => response.json())
.then((data) => {
    data.map(element => {

        let divCont = document.createElement("div");
        divCont.classList.add('content')


        let name = document.createElement("h1");
        name.textContent = element.name;
        // console.log(element.name);

        let image = document.createElement("img");
        image.src = element.img;
        // console.log(image);

        let btndel = document.createElement('button');
        btndel.textContent = "Delete";

        divCont.appendChild(name);
        divCont.appendChild(image);
        divCont.appendChild(btndel);

        btndel.addEventListener("click", () => {
            fetch(url +`/` + element.id, {
                method: 'DELETE',
            });
            then(res => res.json())
            .then(data => location.reload())
        })


        cont.appendChild(divCont);
    })

});


