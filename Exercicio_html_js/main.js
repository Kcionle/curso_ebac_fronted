const form = document.getElementById('form-deposito');
const numeroB = document.getElementById('numero-B');
let formEValido = false;

function bMaiorA(numeroA, numeroB) {
  return numeroB > numeroA;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const numeroA = document.getElementById('numero-A');
  const mensagemSucesso = `O número: <b>${numeroB.value}</b> é maior que o número: <b>${numeroA.value}</b>`;

  formEValido = bMaiorA(numeroA.value, numeroB.value);

  if (formEValido) {
    const containerMensagemSucesso = document.querySelector('.success-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    numeroA.value = '';
    numeroB.value = '';

  } else {
    numeroB.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
  }
});

numeroB.addEventListener('keyup', function(e) {
  formEValido = bMaiorA(document.getElementById('numero-A').value, e.target.value);

  if (!formEValido) {
    numeroB.classList.add('error');
    document.querySelector('.error-message').style.display = 'block';
  } else {
    numeroB.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
  }
});
