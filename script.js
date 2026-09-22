const boton = document.getElementById('boton');
const valor = document.getElementById('valor');

let contador = 0;

boton.addEventListener('click', () => {
  contador += 1;
  valor.textContent = contador;
});
