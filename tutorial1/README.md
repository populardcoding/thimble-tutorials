TIPS 
- - - - - - - - - 
Estaremos utilizando los siguiente elementos HTML:
   - División/Sección	<div> 
   - Imagen		<img>
   - Heading 2		<h2>

Les estaremos añadiendo un atributo de identificación (id=“”) 
algunos elemento para así poder estilizarlos luego.

*IMPORTANTE: Asegúrense siempre que comienzen un elemento de HTML lo cierren. 

Ejemplo
Si abren el elemento de división así:  <div>
Asegúrense de cerrar el elemento así: 	</div>


- - - - - - - - - - - - - - - - - - 
Creando nuestro primer HTML
- - - - - - - - - - - - - - - - - - 

1. Añadir el siguiente elemento HTML dentro del elemento <body> para que se muestre en el navegador el logo D-Coding:

  <div id="seccion-logo">
     <img src="img-logo.gif"> 
  </div>
 
2. Luego vamos añadir la imagen principal con el siguiente elemento HTML:

  <div id="seccion-foto-principal">
    <img src="img-foto-1.jpg">
  </div>


3. Añadir sección de la iniciativa del evento, el cual contiene una imagen y el texto:

  <div id="seccion-iniciativa">
      <div>
          <img src="img-foto-2.jpg">
      </div>
      <div>
        <h2>
            Iniciativa
        </h2>  
        Dentro del compromiso comunitario y de innovación de Popular, estamos ofreciendo los talleres D-coding, libres de costo.
      </div>
  </div>


4. Por último añadimos la sección de las 3 columnas(Coding, Expertos y Taller):

  <div id="seccion-iconos">
    <div>
      <img src="img-icon-1.gif">
      <h2>
        Coding
      </h2>
      Coding es el lenguaje de programación y análisis que se utiliza en el diseño y funcionamiento de los procesos computadorizados con el propósito de asignar, clasificar y ejecutar.
    </div>
    <div>
      <img src="img-icon-2.gif">
      <h2>
        Expertos
      </h2>
      Charlas educativas llevadas a cabo por expertos en la materia, que forman parte de nuestro equipo de tecnología y un empleado actual de la red social LinkedIn.
    </div>
    <div>
      <img src="img-icon-3.gif">
      <h2>
        Taller
      </h2>
      Se le estará dando la oportunidad a los estudiantes a codificar mediante un taller "hands-on", donde tendrán la oportunidad de completar un juego.
    </div>
  </div>


- - - - - - - - - - - - - - - - - - -  
Para estilizar la página se utiliza el archivo style.css. En este archivo es donde se añaden los tamaños de los elementos, colores de fondo, tamaños de fuentes(texto), etc.

El archivo “style-final.css” contiene unos ya creado que pueden asignarle a su página “index.html”.

¿Cómo asignarle los estilos?

Hay 2 opciones;

1. En la línea 7 del código HTML hacer referencia(atributo href=“…”) al archivo “style-final.css”:

   <link rel="stylesheet" href="style-final.css">

2. La otra opción es copiar todos los estilos que se encuentran en “style-final.css” y pasarlos al archivo “style.css”

