window.addEventListener('load', ()=>{
	animar(".anim-aumentar-aparecer");
	animar(".anim-izquierda-aparecer");
	animar(".contacto.anim-aparecer",1.5,window.innerHeight);
})
window.addEventListener('scroll', ()=>{
	animar(".anim-aparecer");
	animar(".anim-derecha");
	document.querySelectorAll('.tecnologia.anim-derecha-aparecer').forEach((e,i)=>{
		animar(e,(i+1)*.5,window.innerHeight/1.5);
	})
})