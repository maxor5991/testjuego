function ente (x,y,w,h,dibujo,fotograma,volumen,resolucion,animacion,vida,vidamax,velocidad,velocidadmax,poder,podermax,acciontipo,accionavance,estado)
{

	
	this.choque=function(rect)
	{
		if(puntos==10)
			{
				var ask = window.confirm(":v");
    if (ask) {

		document.location.href = "yes.html";
	}

			}
		else
			{
				if(rect!=null)
					{
						if (this.x<rect.x+rect.w && this.x+this.w>rect.x && this.y<rect.y+rect.h && this.y+this.h>rect.y){return(1);}
						else {return(0);}
					}
			}
	}

	this.interseccion=function(rect)
	{
		if(rect!=null)
		{
		if (this.x<rect.x+rect.w && this.x+this.w>rect.x ){return(1);}
		else {return(0);}
		}
	}

	this.muere=function()
	{
		this.x = 1200;
	}

	this.nace=function(xxx,yyy)
	{
		this.vida=this.vidamax;
		this.x=xxx;
		this.y=yyy;
	}

	this.dibuja=function(ctx)
	{
		cordenadax_dibuja=(this.fotograma-1)*this.volumen;
		ctx.drawImage(imagen[this.dibujo], cordenadax_dibuja , cordenaday_dibuja , this.volumen, this.volumen, this.x, this.y, this.resolucion, this.resolucion);
	}

}




function  mover (velocidad,elevar)
{


guerrero.x=guerrero.x+velocidad;
guerrero.y=guerrero.y+elevar;


}

//Hola Clau, ganaste el juego , asi como te ganaste mi corazon , sabes soy muy cobarde para decirtelo en persona , asi que esta es la unica forma que se me ocurre , a travez de este juego te doy una muestra de lo importante que eres para mi , por tu forma de ser , tu carisma , tu inteligencia , tu caracter , y lo linda que eres , se que acabas de salir de una relacion tormentosa , y bueno entenderia que tu respuesta ante esto sea negativa pero no podia esperar mas para decirtelo , me gustas y demasiado soy muy obvio , aunque despues de todo este mensaje solo me queda preguntar ¿Quieres ser mi enamorada?

