TIPS
Estaremos utilizando los siguiente elementos HTML:

Elemento HTML	¿Qué hace?
<form>	Indica que vamos a aceptar input del usuario
<input>	Tags de input de usuario
Estaremos utilizando los siguientes elementos de Javascript:

Evento	¿Qué hace?
onClick	Ejecuta una acción cuando se hace clic al elemento HTML
onmouseover	Ejecuta una acción cuando se le para el cursor encima al elemento
onmouseout	Ejecuta una acción cuando el cursor sale del área encima del elemento HTML
Para poder identificar los elementos únicamente le estaremos colocando su propiedad de identificación como en el tutorial anterior( id=“” ) 

*IMPORTANTE: 
Nuestras funciones utilizan varias propiedades de Javascript:

Para poder utilizar nuestras funciones de Javascript, debemos declarar los eventos anteriores como propiedades del elemento de HTML y colocar nuestra función luego de un signo de igual entre comillas.
Cada input debe tener un tipo, si queremos aceptar texto se escribe type="text"
Nuestras funciones contienen una serie de paréntesis luego de su nombre, es aquí dentro donde debemos poner si nuestra función recibe algún parámetro
Ejemplos

onmouseover: <input id="input" onmouseover="function()">
onclick: <div id="submit" onclick="function()">
Resultado final:
            
            <input type="text" onclick="function()">
               
            </input>
            
Aquí es donde se entra el texto

            
Creando mi primer JavaScript
1. Añadir el siguiente elemento HTML <form> dentro del elemento <div id="seccion-logo">, debajo de la imagen.  Indicando que vamos a aceptar valores del usuario.
Es aquí donde vamos a colocar nuestro encasillado y nuestro botón de someter.

            
            <form id="form" onsubmit="return false;">
               <input style="" type="text" id="userInput" /> 
               <input style="" type="submit" onclick="hello();" /> 
            </form>
            
            
2. Luego vamos añadir nuestra función "hello()" a nuestro archivo de Javascript llamado script.js:

             
             function hello() {
                var input = document.getElementById("userInput").value;
                alert("Hello" + " " + input + ", welcome to D-Coding");
            }
*IMPORTANTE:
Para verla en acción, añadan en su HTML la siguiente línea de código:
            
            <script src="script.js"></script>

              
*IMPORTANTE: 
Nuestras funciones utilizan varias propiedades de Javascript:
document: indica el objeto con el cual el JS va a interactuar
alert: hace que un popup aparezca
getElementById: busca nuestro elemento en el archivo de HTML de acuerdo a su identificador
3. Añadir botones para que interactúen con non nuestro Javascript en index.html, estos van justo debajo de nuestro form:

              
            <div id="buttons">
                <input type="button" onclick="chBackcolor('red');" value="red">
                <input type="button" onclick="chBackcolor('yellow');" value="yellow">
            </div>
                    
              
4. Añadir nuestra función de Javascript, al archivo script.js que va a interactuar con ambos botones y va a cambiar el color de nuestro background:

                function chBackcolor(color) {
                    document.body.style.background = color;
                }
              

*IMPORTANTE: 
Esta función acepta un parámetro lo cual hace posible que ambos botones interactúen diferente con ella.
5. En nuestro index.html reemplazar:

  	a. 
  	<img src="http://populardcoding.com/tutorial1/img-icon-1.gif">
      por: 
    <img onmouseover="bigImg(this)" onmouseout="regImg(this)"  src="http://populardcoding.com/tutorial1/img-icon-1.gif">
  
    b. 
    <img src="http://populardcoding.com/tutorial1/img-icon-2.gif">
      por: 
    <img onmouseover="bigImg(this)" onmouseout="regImg(this)"  src="http://populardcoding.com/tutorial1/img-icon-2.gif">
  
    c. 
    <img src="http://populardcoding.com/tutorial1/img-icon-3.gif">
      por: 
    <img onmouseover="bigImg(this)" onmouseout="regImg(this)"  src="http://populardcoding.com/tutorial1/img-icon-3.gif">
	

            
6. Añadir nuestras funciones onmouseover y onmouseout en el archivo script.js:

                function bigImg(x) {
                    x.style.height = "64px";
                     x.style.width = "64px";
                }
                function regImg(x){
                    x.style.height = "40px";
                    x.style.width = "40px";
                }
                
                
                
