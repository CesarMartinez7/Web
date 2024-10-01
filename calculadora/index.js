const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (boton.id === "delete") {
      return (pantalla.textContent = "0");
    }

    if (boton.id == "igual") {
      try {
        const resultado = eval(pantalla.textContent);
        if (
          resultado === Infinity ||
          resultado === -Infinity ||
          isNaN(resultado)
        ) {
          pantalla.textContent == "ERROR";
          return;
        } else {
          return (pantalla.textContent = resultado);
        }
      } catch (error) {
        pantalla.style.color = "#f3150596"
        pantalla.textContent = "ERROR";
        return;
      }
    }
    pantalla.style.color ="#ffff"
    if (pantalla.textContent === "0") {
      pantalla.textContent = boton.textContent;
    } else {
      pantalla.textContent += boton.textContent;
    }
  });
});
