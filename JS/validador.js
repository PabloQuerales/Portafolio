const formContacto = document.getElementById("contacto");
const inputs = document.querySelectorAll('#contacto input');
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validarFormulario = (evento) => {
	switch (evento.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, evento.target, 'nombre');
		break;
		case "email":
			validarCampo(expresiones.email, evento.target, 'email');
		break;
		}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.querySelector(`#grupo__${campo} .formcontacto__input__error`).classList.remove('formcontacto__input__error-activo');
	} else {
		document.querySelector(`#grupo__${campo} .formcontacto__input__error`).classList.add('formcontacto__input__error-activo');
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

contacto.addEventListener('submit', (evento) => {
	evento.preventDefault();
});