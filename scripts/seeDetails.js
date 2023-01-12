
let videosSS = sessionStorage.getItem("videosSS") ? JSON.parse(sessionStorage.getItem("videosSS")) : [];

const id = parseInt(sessionStorage.getItem("id"));
const video = JSON.parse(sessionStorage.getItem("videosSS"))[id];

const columna1 = document.querySelector(".column1");
const columna2 = document.querySelector(".column2");

const imprimirSugeridos = (videos, contenedor) => {
    contenedor.innerHTML = '<h3 class="title__h3">Videos Sugeridos</h3>';

    videos.forEach((videoF) => {
        if(videoF.autor == video.autor || videoF.categoria == video.categoria){
            const article = document.createElement("article");
            article.classList.add("main__article");
            article.innerHTML = `
                    <img class="img__article"src="${videoF.miniatura}">
                    <h3 class="title__article"> ${videoF.titulo}</h3>
                    <p class="p__article"> ${videoF.autor}</p>
                    <p class="p__article">${videoF.vistas} Vistas - ${videoF.fecha}</p>`;
            contenedor.append(article);
        }

    });

};

const imprimirDatos = () => {
    
    columna1.innerHTML = `
        <iframe class="video" src="https://www.youtube.com/embed/XYdOLf_iE7M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3 class="title__article"> ${video.titulo}</h3>
        <p class="p__article"> ${video.autor}</p>
        <p class="p__article">${video.vistas} Vistas - ${video.fecha}</p>`;
}

//Eventos
document.addEventListener("DOMContentLoaded", () => {
    imprimirSugeridos(videosSS, columna2);
    imprimirDatos();
})


