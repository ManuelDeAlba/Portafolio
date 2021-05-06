const navbar = document.querySelector('.navbar');

let ultimaPos = 0;

window.addEventListener('scroll', () => {
	//Cambio de estilos
	if(window.scrollY > 0){
		navbar.classList.add("abajo");
	} else {
		navbar.classList.remove("abajo");
	}
	//Esconder o sacar menú
	if(window.scrollY > 300){
		if(window.scrollY > ultimaPos){
			navbar.style.transform = "translateY(-100%)";
		} else {
			navbar.style.transform = "translateY(0)";
		}
	}
	ultimaPos = window.scrollY;
})

// DISPOSITIVOS MOVILES
const hamburguesa = document.querySelector('.hamburguesa');
const menuMobile = document.querySelector('.menu-mobile');
const btnCerrar = document.querySelector('.menu-mobile .cerrar');
const menuMobileItems = document.querySelectorAll('.menu-mobile .menu__item');

hamburguesa.addEventListener('click', () => {
	menuMobile.classList.add('activo');
})

btnCerrar.addEventListener('click', () => {
	menuMobile.classList.remove('activo');
})

menuMobileItems.forEach(e => {
	e.addEventListener('click', () => {
		menuMobile.classList.remove('activo');
	})
})

window.addEventListener('resize', () => {
	menuMobile.classList.remove('activo');
})