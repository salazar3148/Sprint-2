const videos = [
    {
        miniatura: "https://i.ytimg.com/vi/51XzW98wEDg/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/Soa3gO7tL-c",
        titulo: "Boulevard Of Broken Dreams",
        categoria: "musica",
        autor: "Green Day",
        vistas: 2000,
        fecha: "12. Ago 2021"
    },
    {
        miniatura: "https://i.ytimg.com/vi/eVTXPUF4Oz4/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/eVTXPUF4Oz4",
        titulo: "In The End - Linkin Park",
        categoria: "musica",
        autor: "Linkin Park",
        vistas: 19700000,
        fecha: "12. Ago 2021"
    },
    {
        miniatura: "https://i.ytimg.com/vi/r00ikilDxW4/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/x5x6hdppj7w",
        titulo: "Green Day - 21 Guns",
        categoria: "musica",
        autor: "Green Day",
        vistas: 13519,
        fecha: "11/01/2022"
    },
    {
        miniatura: "https://i.ytimg.com/vi/Pw-0pbY9JeU/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/R8ErW9xbuno",
        titulo: "twenty one pilots - Ride",
        categoria: "musica",
        autor: "Twenty One Pilots",
        vistas: 2100000,
        fecha: "02. Jun 2021"
    },
    {
        miniatura: "https://i.ytimg.com/vi/WXv31OmnKqQ/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/vDIayFcCEqA",
        titulo: "Mein Herz Brennt - Rammstein - Piano",
        categoria: "musica",
        autor: "Rammstein",
        vistas: 40143,
        fecha: "30. May 2020"
    },
    {
        miniatura: "https://i.ytimg.com/vi/4VR-6AS0-l4/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/4VR-6AS0-l4",
        titulo: "Ludovico Einaudi - Nuvole Bianche",
        categoria: "musica",
        autor: "Ludovico Einaudi",
        vistas: 1300000,
        fecha: "11. Nov 2019"
    },
    {
        miniatura: "https://i.ytimg.com/vi/8qteIhQe4ts/hqdefault.jpg",
        url: "https://www.youtube.com/embed/8qteIhQe4ts",
        titulo: "Creando una aplicación de servidor | NodeJS & TypeScript - #1 P1",
        categoria: "backend",
        autor: "codrr",
        vistas: 5120,
        fecha: "08. Oct 2022"
    },
    {
        miniatura: "https://i.ytimg.com/vi/1vcW199Qs5k/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/1vcW199Qs5k",
        titulo: "NESKA - HASTA SIEMPRE (ft. Lidia Vodec)",
        categoria: "musica",
        autor: "Neska",
        vistas: 668916,
        fecha: "01. Jan 2020"
    },
    {
        miniatura: "https://i.ytimg.com/vi/X81YJldQu2I/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/X81YJldQu2Ik",
        titulo: "He's a Pirate - Launchpad Remix (Julius Nox)",
        categoria: "musica",
        autor: "Julius Nox",
        vistas: 25000000,
        fecha: "03. Mar 2018"
    },
    {
        miniatura: "https://i.ytimg.com/vi/Pj876uavnrc/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/Pj876uavnrc",
        titulo: "XENON - SIN RUMBO",
        categoria: "musica",
        autor: "Xenon",
        vistas: 306747,
        fecha: "04. Apr 2019"
    },
    {
        miniatura: "https://i.ytimg.com/vi/Gr8-hrE4AF0/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/Gr8-hrE4AF0",
        titulo: "Me Encanta",
        categoria: "musica",
        autor: "Melodias Eternas",
        vistas: 654147,
        fecha: "20. Jul 2017"
    },
    {
        miniatura: "https://i.ytimg.com/vi/nlTBwNqvVn8/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/nlTBwNqvVn8",
        titulo: "Empezando con Flutter",
        categoria: "programacion",
        autor: "Fernando Herrera",
        vistas: 54235,
        fecha: "13. Jul 2021"
    },
    {
        miniatura: "https://i.ytimg.com/vi/VNRDmHvYp80/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/bDOn2lI9KXs",
        titulo: "2. Mi Primer Código Con Javascript",
        categoria: "programacion",
        autor: "Fernando Herrera",
        vistas: 10246,
        fecha: "01. May 2021"
    },
    {
        miniatura: "https://i.ytimg.com/vi/NPboDOK1sUU/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/SPVx6Bifnuc",
        titulo: "Backend: Preguntas",
        categoria: "backend",
        autor: "Fernando Herrera",
        vistas: 3929,
        fecha: "06. Sep 2021"
    },
    {
        miniatura: "https://i.ytimg.com/vi/AEiRa5xZaZw/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/AEiRa5xZaZw",
        titulo: "Curso de programación desde cero",
        categoria: "programacion",
        autor: "Geekoedia",
        vistas: 4800000,
        fecha: "03. Jul 2017"
    },
    {
        miniatura: "https://i.ytimg.com/vi/as1opL254NA/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/as1opL254NA",
        titulo: "Lógica de Programación",
        categoria: "programacion",
        autor: "Programador X",
        vistas: 1400000,
        fecha: "14. May 2022"
    },
    {
        miniatura: "https://i.ytimg.com/vi/RtevrQZCdAU/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/RtevrQZCdAU",
        titulo: "Cómo saber si la programación es para mi",
        categoria: "programacion",
        autor: "Platzi",
        vistas: 487832,
        fecha: "05. Jan 2023"
    },
    {
        miniatura: "https://i.ytimg.com/vi/DLikpfc64cA/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/DLikpfc64cA",
        titulo: "Introducción a Programación en Python",
        categoria: "programacion",
        autor: "FreeCodeCamp",
        vistas: 826357,
        fecha: "10. Jul 2019"
    },
    {
        miniatura: "https://i.ytimg.com/vi/IbBPIna6nzc/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/IbBPIna6nzc",
        titulo: "La REALIDAD de Estudiar PROGRAMACIÓN",
        categoria: "programacion",
        autor: "Absolute",
        vistas: 460096,
        fecha: "21. Mar 2016"
    },
    {
        miniatura: "https://i.ytimg.com/vi/7vbi-OCFZEY/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/6svvtOjLA-A",
        titulo: "¿Qué es la programación y para qué se utiliza?",
        categoria: "programacion",
        autor: "ZoneClass",
        vistas: 54235,
        fecha: "16. Jul 2014"
    },
    {
        miniatura: "https://i.ytimg.com/vi/VxrIZGQfxmE/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/VxrIZGQfxmE",
        titulo: "Aprende a programar ahora! ",
        categoria: "programacion",
        autor: "HolaMundo",
        vistas: 158257,
        fecha: "31. Oct 2022"
    },
    {
        miniatura: "https://i.ytimg.com/vi/OFncVIy-c_Y/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/OFncVIy-c_Y",
        titulo: "Sé Desarrollador en 3 meses",
        categoria: "programacion",
        autor: "Nico Salgado",
        vistas: 314501,
        fecha: "20. Jul 2022"
    },
    {
        miniatura: "https://i.ytimg.com/vi/fkVgNf3kMTM/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/fkVgNf3kMTM",
        titulo: "Ruta para ser programador BACKEND",
        categoria: "backend",
        autor: "Programador X",
        vistas: 74295,
        fecha: "28. Feb 2021"
    },
    {
        miniatura: "https://i.ytimg.com/vi/s95S1_vP-dQ/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/s95S1_vP-dQ",
        titulo: "Qué es Frontend y Backend",
        categoria: "backend",
        autor: "Platzi",
        vistas: 95978,
        fecha: "03. Sep 2021"
    },
    {
        miniatura: "https://i.ytimg.com/vi/0Zb5fgO0ubE/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/0Zb5fgO0ubE",
        titulo: "Ser programador backend el 2023",
        categoria: "backend",
        autor: "HolaMundo",
        vistas: 72398,
        fecha: "21. Dec 2022"
    },
    {
        miniatura: "https://i.ytimg.com/vi/Fms6bXpqF2k/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/Fms6bXpqF2k",
        titulo: "¿Qué es un Programador BACKEND JUNIOR?",
        categoria: "backend",
        autor: "hdeleon.net",
        vistas: 31242,
        fecha: "20. Oct 2022"
    },
    {
        miniatura: "https://i.ytimg.com/vi/8fCPeivEJtE/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/8fCPeivEJtE",
        titulo: "5 Cosas Para Ser Desarrollador Backend!",
        categoria: "backend",
        autor: "hdeleon.net",
        vistas: 42261,
        fecha: "14. Apr 2022"
    },
    {
        miniatura: "https://i.ytimg.com/vi/_y9qQZXE24A/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/_y9qQZXE24A",
        titulo: "Python desde 0 para Backend!",
        categoria: "backend",
        autor: "MoureDev",
        vistas: 37419,
        fecha: "06. Jan 2023"
    },
    {
        miniatura: "https://i.ytimg.com/vi/ajXHfGbd1ak/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/ajXHfGbd1ak",
        titulo: "En Que Consiste Un empleo Como Backend",
        categoria: "backend",
        autor: "Fundacion Telefonica",
        vistas: 13619,
        fecha: "16. Jan 2018"
    },
    {
        miniatura: "https://i.ytimg.com/vi/BhvLIzVL8_o/maxresdefault.jpg",
        url: "https://www.youtube.com/embed/BhvLIzVL8_o",
        titulo: "Nodejs Curso Desde Cero",
        categoria: "backend",
        autor: "Fazt",
        vistas: 907441,
        fecha: "30. Jun 2019"
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

const imprimirVideos = (videos, contenedor, categoria, keyword) => {
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
        
        agregarAlContenedor(contenedor, article, video, categoria, keyword)
    });

    articles = document.querySelectorAll(".main__article");
    crearPaginaDetalle();
};
//

const agregarAlContenedor = (contenedor, article, video, categoria="todos", keyword)=> {

    if(categoria != "search__button"){
        if(categoria == "todos" || video.categoria == categoria)
            contenedor.append(article)
        return;
    }
    console.log(video.titulo, video.autor, keyword);
    if(video.titulo.toLowerCase().includes(keyword) || video.autor.toLowerCase().includes(keyword)){
        
        contenedor.append(article)
    }
}

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
            imprimirVideos(videosSS, videoContainer, event.target.id)
        }
    })
})

busqueda.addEventListener(("click"), (event) => {
    const keyword = document.querySelector("#search__input").value.toLowerCase()
    if (keyword) {
        imprimirVideos(videosSS, videoContainer, event.target.id, keyword)   
    }
})

crearPaginaDetalle = () => {
    articles.forEach((article) => {
        article.addEventListener("click", (event) => {
            sessionStorage.setItem("id", event.target.id)
            window.location.href = "pages/seeDetails.html";
        })
    })
}






