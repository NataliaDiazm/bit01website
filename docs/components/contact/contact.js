const modal = document.getElementById("modal");
const cerrarBtn = document.getElementsByClassName("closed")[0];

document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Para obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;
  const datosModal = document.getElementById("datos-modal");
  datosModal.textContent = nombre;
  modal.style.display = "block";

  console.log("Nombre:", nombre);
  console.log(email);
  console.log(mensaje);
});

cerrarBtn.addEventListener("click", function () {
  modal.style.display = "none";
  location.reload();
  
});
