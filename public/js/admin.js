const entrarInput = document.getElementById("iniciar")
const userInput = document.getElementById("usuario")
const passwordInput = document.getElementById("contraseña")

entrarInput.addEventListener("click", () => {
  console.log("clickkk")
  const password = passwordInput.value
  const user = userInput.value
  mandarDatos();

  async function mandarDatos() {
    try {
      const respuesta = await fetch(
            "/api/admin",
        {
          method: "POST", 
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify({user,password}), 
        })


        const resultado = await respuesta.json()
        
        console.log("respuesta del servidor:", resultado)
      
        if (resultado.sesion === true) {
            alert(resultado.mensaje)
            window.location.href = "panel.html"
        } else {
            alert("error: " + resultado.mensaje)
        }
    } catch (error) {
        console.log(error)
    }
  }
});
