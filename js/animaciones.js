window.addEventListener('load', ()=>{
	animar(".anim-aumentar-aparecer");
	animar(".anim-izquierda-aparecer");
	animar(".contacto.anim-aparecer",1.5,window.innerHeight);
})
window.addEventListener('scroll', ()=>{
	animar(".anim-arriba-aparecer", 1, window.innerHeight-100);
	animar(".anim-izquierda-aparecer");
	animar(".anim-aparecer");
	animar(".anim-aparecer", 1, window.innerHeight - 100)
	animar(".anim-derecha", 1, window.innerHeight/1.5);
	document.querySelectorAll('.tecnologia.anim-derecha-aparecer').forEach((e,i)=>{
		animar(e,(i+1)*.5,window.innerHeight/1.5);
	})
})