let content = document.querySelectorAll(".seccion-contenido")
let sidebar = document.querySelectorAll("li")



function limpiarActivo() {
    sidebar.forEach(elemento => {
        elemento.classList.remove("activo")

    })
}

function limpiarContent() {
    content.forEach(seccion => {
        seccion.style.display = "none"
    })
}

sidebar.forEach(elemento => {
    elemento.addEventListener('click', function (event) {
        limpiarActivo()
        limpiarContent()
        let idDestino = elemento.getAttribute("seccion-datos")
        let seccionAMostrar = document.getElementById(idDestino)
        if (seccionAMostrar) {
            seccionAMostrar.style.display = "block"
        }

        elemento.classList.add("activo")
    })
})

document.querySelectorAll('.btn-position').forEach(btn => {
    btn.addEventListener('mouseenter', e => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
  
      const span = btn.querySelector('span')
      span.style.left = x + 'px'
      span.style.top = y + 'px'
    })
  
    btn.addEventListener('mouseleave', e => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
  
      const span = btn.querySelector('span')
      span.style.left = x + 'px'
      span.style.top = y + 'px'
    })
  })