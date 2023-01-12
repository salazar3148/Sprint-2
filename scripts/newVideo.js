const form = document.querySelector(".main__form")

let videosSS = sessionStorage.getItem("videosSS") ? JSON.parse(sessionStorage.getItem("videosSS")) : [];

form.addEventListener("submit", (event) => {

    event.preventDefault();
    let flag = true;
    const errores = [];
    const newVideo = {}

    //Validaciones Javascript

    Object.keys(form).forEach((index) => {
        const item = form[index];
        if (item.id !== '') {
            if(item.value) newVideo[item.id] = item.value;
            else {
                flag = false;
                errores.push(item.id);
            }
        }
    })
    
    if(flag) {
        videosSS.push(newVideo)
        sessionStorage.setItem("videosSS", JSON.stringify(videosSS))
    } else alert(`Falta ingresar los campos: ${errores.join(", ")}.`)
    console.log(videosSS);
})