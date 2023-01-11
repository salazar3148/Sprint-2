videos = [
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



const videoContainer = document.querySelector(".main__container")

//Botones de Filtrado
const botones = []
const nav = document.querySelector(".nav__bar").childNodes
Object.keys(nav).forEach((child) => {
    if (nav[child].id) botones.push(nav[child])
})

const busqueda = document.querySelector("#search__button")

const imprimirVideos = (videos, contenedor, categoria = "todos", buscar = "") => {
    contenedor.innerHTML = "";

    videos.forEach((video) => {

        const article = document.createElement("article");
        article.classList.add("main__article");
        article.innerHTML = `
            <article class="main__article">
                <img class="img__article"src="${video.miniatura}">
                <h3 class="title__article"> ${video.titulo}</h3>
                <p class="p__article"> ${video.autor}</p>
                <p class="p__article">${video.vistas} Vistas - ${video.fecha}</p>
            </article>`;
        contenedor.append(article);

    });
};


//Eventos

document.addEventListener("DOMContentLoaded", () => {

    const videosS = sessionStorage.getItem("videos") ? JSON.parse(sessionStorage.getItem("videos")) : [];

    if (!videosS.lenght) {
        sessionStorage.setItem("videos", JSON.stringify(videos))
        sessionStorage.getItem("videos")
    }

    console.log(videosS);

    imprimirVideos(videos, videoContainer);
})

//Programar funcion Filtrado por categoria (Barra de botones)

botones.forEach((boton) => {
    boton.addEventListener(("click"), (event) => {
        if(event.target.id == "todos") imprimirVideos(videos, videoContainer, event.target.id)   
        else {
            const filtrado = videos.filter((video) => video.categoria == event.target.id)
            imprimirVideos(filtrado, videoContainer, event.target.id)   
        }
    })
})

busqueda.addEventListener(("click"), () => {
    const keyword = document.querySelector("#search__input").value.toLowerCase()
    if (keyword) {
        const filtrado = videos.filter((video) => video.titulo.toLowerCase().includes(keyword) || video.autor.toLowerCase().includes(keyword))
        imprimirVideos(filtrado, videoContainer, event.target.id)   
    }
})




