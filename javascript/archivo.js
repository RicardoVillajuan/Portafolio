
window.addEventListener('scroll', function(){
    let portafolio=this.document.querySelector(".nombre-portafolio");
    let header=this.document.querySelector(".principio__nav");
    let enlaces=this.document.querySelectorAll(".enlaces");


    header.classList.toggle('abajo',window.scrollY>0);
    portafolio.classList.toggle('negro',window.scrollY>0);  
    
    enlaces.forEach(function(enlace){
        enlace.classList.toggle('colornegro',window.scrollY>0);
    });
    
})