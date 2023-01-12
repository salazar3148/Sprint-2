const videos = [
    {
        miniatura: "https://i.ytimg.com/vi/51XzW98wEDg/maxresdefault.jpg",
        titulo: "Boulevard Of Broken Dreams",
        categoria: "musica",
        autor: "Green Day",
        vistas: 2000,
        fecha: "12. Ago 2021"
    },
    {
        miniatura: "https://i.ytimg.com/vi/51XzW98wEDg/maxresdefault.jpg",
        titulo: "Aqui hay una oracion larga larga",
        categoria: "backend",
        autor: "Tri Line",
        vistas: 2000,
        fecha: "12. Ago 2021"
    },
    {
        miniatura: "https://i.ytimg.com/vi/51XzW98wEDg/maxresdefault.jpg",
        titulo: "Aqui hay una oracion larga larga",
        categoria: "musica",
        autor: "Tri Line",
        vistas: 2000,
        fecha: "12. Ago 2021"
    },
    {
        miniatura: "https://i.ytimg.com/vi/51XzW98wEDg/maxresdefault.jpg",
        titulo: "Aqui hay una oracion larga larga",
        categoria: "musica",
        autor: "Tri Line",
        vistas: 2000,
        fecha: "12. Ago 2021"
    },
    {
        miniatura: "https://i.ytimg.com/vi/51XzW98wEDg/maxresdefault.jpg",
        titulo: "Aqui hay una oracion larga larga",
        categoria: "programacion",
        autor: "Tri Line",
        vistas: 2000,
        fecha: "12. Ago 2021"
    }
]

let videosSS = sessionStorage.getItem("videosSS") ? JSON.parse(sessionStorage.getItem("videosSS")) : [];
const videoContainer = document.querySelector(".main__container")

//Botones de Filtrado
const botones = []
const nav = document.querySelector(".nav__bar").childNodes
Object.keys(nav).forEach((child) => {
    if (nav[child].id) botones.push(nav[child])
})

//Articles
let articles;

const busqueda = document.querySelector("#search__button")

const imprimirVideos = (videos, contenedor) => {
    let ids = 0;
    contenedor.innerHTML = "";

    videos.forEach((video) => {
        const article = document.createElement("article");
        article.classList.add("main__article");
        article.innerHTML = `
                <img id="${ids++}" class="img__article"src="${video.miniatura}">
                <h3 class="title__article"> ${video.titulo}</h3>
                <p class="p__article"> ${video.autor}</p>
                <p class="p__article">${video.vistas} Vistas - ${video.fecha}</p>`;
        contenedor.append(article);
    });

    articles = document.querySelectorAll(".main__article");
    crearPaginaDetalle();
};


//Eventos

document.addEventListener("DOMContentLoaded", () => {

    if (!videosSS.length) {
        console.log("object");
        sessionStorage.setItem("videosSS", JSON.stringify(videos))
        videosSS = JSON.parse(sessionStorage.getItem("videosSS"));
    }

    imprimirVideos(videosSS, videoContainer);
})

//Programar funcion Filtrado por categoria (Barra de botones)

botones.forEach((boton) => {
    boton.addEventListener(("click"), (event) => {
        if(event.target.id == "todos") imprimirVideos(videosSS, videoContainer, event.target.id)   
        else {
            const filtrado = videosSS.filter((video) => video.categoria == event.target.id)
            imprimirVideos(filtrado, videoContainer, event.target.id)
        }
    })
})

busqueda.addEventListener(("click"), (event) => {
    const keyword = document.querySelector("#search__input").value.toLowerCase()
    if (keyword) {
        const filtrado = videosSS.filter((video) => video.titulo.toLowerCase().includes(keyword) || video.autor.toLowerCase().includes(keyword))
        imprimirVideos(filtrado, videoContainer, event.target.id)   
    }
})

crearPaginaDetalle = () => {
    articles.forEach((article) => {
        article.addEventListener("click", (event) => {
            sessionStorage.setItem("id", event.target.id)
            window.location.href = "/pages/seeDetails.html";
        })
    })
}






