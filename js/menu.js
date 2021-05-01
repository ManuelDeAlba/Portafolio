const menu = document.querySelector('.menu');

let ultimaPos = 0;

window.addEventListener('scroll', () => {
	//Cambio de estilos
	if(window.scrollY > 0){
		menu.classList.add("abajo");
	} else {
		menu.classList.remove("abajo");
	}
	//Esconder o sacar menú
	if(window.scrollY > 300){
		if(window.scrollY > ultimaPos){
			menu.style.transform = "translateY(-100%)";
		} else {
			menu.style.transform = "translateY(0)";
		}
	}
	ultimaPos = window.scrollY;
})