let content = document.querySelectorAll(".seccion-contenido")
let sidebar = document.querySelectorAll("li")



function limpiarActivo(){
    sidebar.forEach(elemento => {
     elemento.classList.remove("activo")

})}

function limpiarContent(){
    content.forEach(seccion =>{
        seccion.style.display = "none"
    })
}

sidebar.forEach(elemento => {
    elemento.addEventListener('click', function (event) {
        limpiarActivo()
        limpiarContent()
        let idDestino = elemento.getAttribute("data-seccion")
        let seccionAMostrar = document.getElementById(idDestino)
            if (seccionAMostrar) {
            seccionAMostrar.style.display = "block"
        }
        
        elemento.classList.add("activo")
    })
})