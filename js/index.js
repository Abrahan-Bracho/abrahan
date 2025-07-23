


if(document.getElementById("flecha_dibujo_izquierda")){

    const flecha_dibujo_derecha = document.getElementById("flecha_dibujo_derecha");
    const flecha_dibujo_izquierda = document.getElementById("flecha_dibujo_izquierda");
    const contenedor_dibujosid = document.getElementById("contenedor_dibujosid");
    var contadorDibujoFlecas = 0;
    var contadorDibujoFlechas = 0;
    let limiteScroll = document.querySelector("#contenedor_dibujosid").scrollLeft;


    console.log(limiteScroll);
    /*Cuando se haga clic*/
    flecha_dibujo_derecha.onmousedown = function() {
        
        contadorDibujosestado = 0;

        let int = setInterval(() => {
            contadorDibujoFlechas += 10;
            contenedor_dibujosid.scrollLeft = contadorDibujoFlechas;
            console.log(contadorDibujoFlechas)

            /*Cuando se deje de hacer clic*/
            flecha_dibujo_derecha.onmouseup = function() {
                contadorDibujosestado = 1;
            };


            limiteScroll = document.querySelector("#contenedor_dibujosid").scrollLeft;
            console.log("oki" + limiteScroll);
            if(contadorDibujosestado==1  || limiteScroll != contadorDibujoFlechas){
                clearInterval(int);
            }
                
        }, 1);
        
    }

    /*Cuando se haga clic*/
    flecha_dibujo_izquierda.onmousedown = function() {
        
        contadorDibujosestado = 0;

        let int = setInterval(() => {
            contadorDibujoFlechas -= 10;
            contenedor_dibujosid.scrollLeft = contadorDibujoFlechas;
            console.log(contadorDibujoFlechas)
            /*Cuando se deje de hacer clic*/
            flecha_dibujo_izquierda.onmouseup = function() {
                contadorDibujosestado = 1;
            };

            if(contadorDibujosestado==1 || contadorDibujoFlechas <= 0 ){
                clearInterval(int);
            }
                
        }, 1);
        
    }

    
}





   




if(document.getElementById("boton_conicimientos")){

    const boton_conicimientos = document.getElementById("boton_conicimientos"); 
    const boton_cuerpo = document.getElementById("boton_cuerpo"); 
    const contenedor_conocimientos = document.getElementById("contenedor_conocimientos"); 
    const contenedor_fisico = document.getElementById("contenedor_fisico"); 
    const barra_boton_conicimientos = document.getElementById("barra_boton_conicimientos"); 
    const barra_boton_cuerpo = document.getElementById("barra_boton_cuerpo"); 
    
    
    boton_conicimientos.addEventListener('click', function(){botonConocimientosF();});
    boton_cuerpo.addEventListener('click', function(){boton_cuerpoF();});

    window.onscroll = function() {
        var y = window.scrollY;
        if(y >= 400){
            
            gsap.to("#estudio", {
                width: "60%",
                duration: 2, 
            });
            gsap.to("#contenedor_datos1", {
                display: "block"
            });
        }
        if(y <= 400){
            
            gsap.to("#estudio", {
                width: "0%",
                duration: 2, 
            });
            gsap.to("#contenedor_datos1", {
                display: "none"
            });
        }
        console.log(y);
    };

    
    
    function botonConocimientosF(){
        console.log("okii");
        contenedor_conocimientos.style.display="block";
        contenedor_fisico.style.display = "none";
        barra_boton_conicimientos.style.display = "block";
        barra_boton_conicimientos.style.width = "100%";
        barra_boton_cuerpo.style.width = "0%";
        barra_boton_cuerpo.style.display = "none";



        gsap.to("#html", {
            width: "30%",
            duration: 2, 
        });
        gsap.to("#css", {
            width: "20%",
            duration: 2, 
        });
        gsap.to("#js", {
            width: "20%",
            duration: 2, 
        });
        gsap.to("#php", {
            width: "10%",
            duration: 2, 
        });
        gsap.to("#mysql", {
            width: "20%",
            duration: 2, 
        });
        gsap.to("#photoshop", {
            width: "40%",
            duration: 2, 
        });
        gsap.to("#dibujo", {
            width: "60%",
            duration: 2, 
        });
        gsap.to("#dibujod", {
            width: "40%",
            duration: 2, 
        });
        gsap.to("#kenpo", {
            width: "80%",
            duration: 2, 
        });
        gsap.to("#defensa", {
            width: "60%",
            duration: 2, 
        });


        // ----------
        gsap.to("#peso", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#altura", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#fuerza", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#recistencia", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#katana", {
            width: "0%",
            duration: 2, 
        });
    }
    
    
    
    function boton_cuerpoF(){
        console.log("okii");
        contenedor_conocimientos.style.display="none";
        contenedor_fisico.style.display = "block";
        barra_boton_conicimientos.style.display = "none";
        barra_boton_cuerpo.style.display = "block";
        barra_boton_cuerpo.style.width = "100%";




        
        gsap.to("#html", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#css", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#js", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#php", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#mysql", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#photoshop", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#dibujo", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#dibujod", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#kenpo", {
            width: "0%",
            duration: 2, 
        });
        gsap.to("#defensa", {
            width: "0%",
            duration: 2, 
        });


        // ----------
        gsap.to("#peso", {
            width: "65%",
            duration: 2, 
        });
        gsap.to("#altura", {
            width: "74%",
            duration: 2, 
        });
        gsap.to("#fuerza", {
            width: "80%",
            duration: 2, 
        });
        gsap.to("#recistencia", {
            width: "70%",
            duration: 2, 
        });
        gsap.to("#katana", {
            width: "50%",
            duration: 2, 
        });
    }
}




const flecha = document.querySelector("#flecha"); 


flecha.addEventListener('click', function(){flechaF();});

function flechaF(){
    $('body, html').animate({
        scrollTop: '1000px'
    }, 300);
}


if(document.getElementById("D1")){


    const D1n = document.querySelector("#D1"); 
    const D2n = document.querySelector("#D2"); 
    const D3n = document.querySelector("#D3"); 
    const D4n = document.querySelector("#D4"); 

    D1.addEventListener('click', function(){FD1();});

    function FD1() {
        
        console.log("oli1");



        D1n.style.transition = "0.5s";
        D1n.style.clipPath = "polygon(0% 0px, 100% 0px, 100% 100%, 0px 100%)";
        D1n.style.zIndex = "8";
        D1n.style.borderBottom = "10px solid rgba(0,255,255,0.78)";




        //-------------
        
        

        D2n.style.zIndex = "5";
        D2n.style.clipPath = "polygon(30% 0px, 84% 0px, 60% 100%, 0px 100%)";
        D2n.style.transition = "0.5s";
        D2n.style.borderBottom = "5px solid rgba(0,255,255,0.78)";
        //----------
            

        D3n.style.transition = "0.5s";
        D3n.style.zIndex = "4";
        D3n.style.clipPath = "polygon(0% 0px, 100% 0px, 93% 100%, 0px 100%)";
        D3n.style.borderBottom = "5px solid rgba(0,255,255,0.78)";
        D3n.style.left = "8em";
        
        //-----------



        D4n.style.transition = "0.5s";
        D4n.style.zIndex = "3";
        D4n.style.borderBottom = "5px solid rgba(0,255,255,0.78)";

        
        
        

    }


    var D2 =  document.getElementById("D2");
    D2.addEventListener('click', function(){FD2();});
    function FD2() {
        
        console.log("oli2");


    //-------------

        D2n.style.transition = "0.5s";
        D2n.style.clipPath = "polygon(0% 0px, 100% 0px, 100% 100%, 0px 100%)";
        D2n.style.borderBottom = "10px solid rgba(0,255,255,0.78)";
        D2n.style.zIndex = "8";
        D2n.style.left = "4em";
        


    //----------
        D1n.style.transition = "0.5s";
        D1n.style.clipPath = "polygon(0% 0px, 100% 0px, 69% 100%, 0px 100%)";
        D1n.style.zIndex = "6";
        D1n.style.borderBottom = "5px solid rgba(0,255,255,0.78)";
        



        D3n.style.transition = "0.5s";
        D3n.style.clipPath = "polygon(0% 0px, 100% 0px, 93% 100%, 0px 100%)";
        D3n.style.left = "10em";
        D3n.style.zIndex = "4";
        D3n.style.borderBottom = "5px solid rgba(0,255,255,0.78)";
        

        D4n.style.zIndex = "3";
        D4n.style.borderBottom = "5px solid rgba(0,255,255,0.78)";
    }

    var D3 =  document.getElementById("D3");
    D3.addEventListener('click', function(){FD3();});
    function FD3() {
        
        console.log("oli3");

        //-----------

        D3n.style.transition = "0.5s";
        D3n.style.clipPath = "polygon(0% 0px, 100% 0px, 100% 100%, 0 100%)";
        D3n.style.borderBottom = "10px solid rgba(0,255,255,0.78)";
        D3n.style.zIndex = "8";
        D3n.style.left = "8em";
        

    //-------

        D1n.style.transition = "0.5s";
        D1n.style.clipPath = "polygon(0% 0px, 100% 0px, 69% 100%, 0px 100%)";
        D1n.style.zIndex = "5";
        D1n.style.borderBottom = "5px solid rgba(0,255,255,0.78)";
        

    //-------------

        D2n.style.transition = "0.5s";
        D2n.style.clipPath = "polygon(7% 0, 100% 0, 72% 100%, 0 100%)";
        D2n.style.zIndex = "6";
        D2n.style.left = "4em";
        D2n.style.borderBottom = "5px solid rgba(0,255,255,0.78)";


        
        

        D4n.style.zIndex = "3";
        D4n.style.borderBottom = "5px solid rgba(0,255,255,0.78)";

    }

    var D4 =  document.getElementById("D4");
    D4.addEventListener('click', function(){FD4();});
    function FD4() {
        
        console.log("oli4");

        

        D4n.style.transition = "0.5s";
        D4n.style.clipPath = "polygon(0 0, 100% 0px, 100% 100%, 0% 100%)";
        D4n.style.borderBottom = "10px solid rgba(0,255,255,0.78)";
        D4n.style.zIndex = "8";
        
    

    //-------

        D1n.style.transition = "0.5s";
        D1n.style.clipPath = "polygon(0% 0px, 100% 0px, 69% 100%, 0px 100%)";
        D1n.style.zIndex = "3";
        D1n.style.left = "2em" ;
        D1n.style.borderBottom = "5px solid rgba(0,255,255,0.78)";
        

    //-------------

        D2n.style.transition = "0.5s";
        D2n.style.clipPath = "polygon(15%  0, 100% 0, 72% 100%, 0 100%)";
        D2n.style.zIndex = "4";
        D2n.style.left = "2.8em" ;
        D2n.style.borderBottom = "5px solid rgba(0,255,255,0.78)";
        
    //--------

        D3n.style.transition = "0.5s";
        D3n.style.clipPath = "polygon(15% 0, 100% 0, 89% 100%, 0 100%)";
        D3n.style.zIndex = "5";
        D3n.style.left = "4em" ;
        D3n.style.borderBottom = "5px solid rgba(0,255,255,0.78)";
        
        
        


    }






}

