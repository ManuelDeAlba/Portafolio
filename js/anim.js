//EJEMPLO DE USO
// window.addEventListener('scroll', ()=>{
// 	//TODOS LOS ELEMENTOS CON ESOS SELECTORES
// 	animar(".cuadro.anim-aparecer",.5,300);

// 	animar(".cuadro.anim-izquierda");
// 	animar(".cuadro.anim-izquierda-aparecer");

// 	animar(".cuadro.anim-derecha");
// 	animar(".cuadro.anim-derecha-aparecer");

// 	animar(".cuadro.anim-arriba");
// 	animar(".cuadro.anim-arriba-aparecer");

// 	animar(".cuadro.anim-abajo");
// 	animar(".cuadro.anim-abajo-aparecer");

// 	animar(".cuadro.anim-aumentar");
// 	animar(".cuadro.anim-aumentar-aparecer");

// 	animar(".cuadro.anim-disminuir");
// 	animar(".cuadro.anim-disminuir-aparecer");

// 	animar(".cuadro.anim-rebote-aumentar");
// 	animar(".cuadro.anim-rebote-aumentar-aparecer");

// 	animar(".cuadro.anim-rebote-disminuir");
// 	animar(".cuadro.anim-rebote-disminuir-aparecer");

// 	animar(".cuadro.anim-rebote-izquierda");
// 	animar(".cuadro.anim-rebote-izquierda-aparecer");

// 	animar(".cuadro.anim-rebote-derecha");
// 	animar(".cuadro.anim-rebote-derecha-aparecer");

// 	animar(".cuadro.anim-rebote-arriba");
// 	animar(".cuadro.anim-rebote-arriba-aparecer");

// 	animar(".cuadro.anim-rebote-abajo");
// 	animar(".cuadro.anim-rebote-abajo-aparecer");

// 	animar(".cuadro.anim-rotar-izquierda");
// 	animar(".cuadro.anim-rotar-izquierda-aparecer");

// 	animar(".cuadro.anim-rotar-derecha");
// 	animar(".cuadro.anim-rotar-derecha-aparecer");

// 	//TODOS LOS ELEMENTOS CON ESOS SELECTORES, PERO LE MANDAMOS TIEMPO DIFERENTE PARA UN EFECTO DE RETRASO ENTRE CADA UNO
// 	let elementos = document.querySelectorAll(".cuadro.acumular.anim-aparecer");
// 	elementos.forEach((e,i)=>{
// 		animar(elementos[i],1*(i+1));
// 	})
// })

function animar(clase,tiempo=1,pos=window.innerHeight/2){
	if(typeof clase == "string"){
		//PASANDO LA CLASE
		let anim = "";
		//Dividimos todas las clases en un array
		//Buscamos solo la que sirve para la animación
		//"anim-aparecer".includes("anim") -> true - "cuadro".includes("anim") -> false
		clase.split(".").forEach(e=>{if(e.includes("anim-"))anim=e});
		let animacion = `animar_${anim}`;
		let elementos = document.querySelectorAll(clase);

		//Recorre todos los elementos para animarlos
		elementos.forEach(e=>{
			if(e.getBoundingClientRect().top <= pos){
				e.style.animation = `${animacion} ${tiempo}s ease forwards`;
			}
		})
	} else {
		//PASANDO SOLO UN ELEMENTO
		let clases = String(clase.classList);
		let anim = "";
		//Dividimos todas las clases en un array
		//Buscamos solo la que sirve para la animación
		//"anim-aparecer".includes("anim") -> true - "cuadro".includes("anim") -> false
		clases.split(" ").forEach(e=>{if(e.includes("anim-"))anim=e});
		let animacion = `animar_${anim}`;
		//Recorre todos los elementos para animarlos
		if(clase.getBoundingClientRect().top <= pos){
			clase.style.animation = `${animacion} ${tiempo}s ease forwards`;
		}
	}
}

function desactivarScrollX(t=true){
	if(t){
		window.addEventListener('load', ()=>{if(window.scrollX != 0)window.scrollTo(0,window.scrollY)});
		window.addEventListener('scroll', ()=>{if(window.scrollX != 0)window.scrollTo(0,window.scrollY)});
	}
}

/*
	PARA CREAR TUS PROPIAS ANIMACIONES:
	1.- HAZ UNA CLASE anim-(nombre)
	2.- KEYFRAME animar_anim-(nombre)
	3.- APLICAR EN TU ELEMENTO
	4.- LLAMAR EN EL ARCHIVO JAVASCRIPT
*/
/*
1.- (Cómo quieres que se muestre antes de ser animado)
	.anim-nombre{
		css
	}
2.-	(Cómo quieres que se muestre durante la animación)
	@keyframes animar_anim-nombre{
		0%{
			css
		}
		.
		.
		.
		50%{
			css
		}
		.
		.
		.
		100%{
			css
		}
	}
3.- (Elemento para aplicarle la animación)
	<div class="cuadro anim-rebote-derecha"></div>
4.-	(Aplicar las animaciones y comprobar)
	animar(".cuadro.anim-rebote-derecha",.5,500);
*/