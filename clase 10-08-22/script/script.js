let boton = document.querySelector ('button')
let parrafo = document.querySelector ('p')
let contador = 0;

boton.addEventListener('click', () =>{
    boton.style.backgroundColor = 'pink'
    contador = contador + 1
    parrafo.textContent = contador
})

var form = document.getElementById("form");
form.addEventListener("focus", function( event ) {
  event.target.style.background = "violet";
}, true);
form.addEventListener("blur", function( event ) {
  event.target.style.background = "";
}, true);

document.getElementById('myform').reset();

const selectElement = document.querySelector('.nieve');

selectElement.addEventListener('change', (event) => {
    const resultado = document.querySelector('.resultado');
    resultado.textContent = `Te gusta el sabor ${event.target.value}`;
});

document.getElementById("focusButton").addEventListener("click", () => {
    document.getElementById("myTextField").focus();
  });
