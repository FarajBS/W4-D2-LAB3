const url = "https://66e8036bb17821a9d9daf500.mockapi.io/yourImg";
const cont = document.getElementById('container'); 

let btn = document.getElementById("add");
let btn2 = document.getElementById("delete");


btn.addEventListener("click", () => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          name: "Faraj 8",
          img: 'https://images.unsplash.com/photo-1726224437880-532a54c9565c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D'
        }),

        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
});

// img.addEventListener("click", () => {
//     fetch(url +"/", {
//         method: 'DELETE',
//     });
// })

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

        divCont.appendChild(name);
        divCont.appendChild(image);


        cont.appendChild(divCont);
    })

});


