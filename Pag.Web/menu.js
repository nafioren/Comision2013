var barNav = document.getElementById("barra-navegacion");
var btns = barNav.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(e) {
    e.preventDefault();
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    if(current[0].id == "Inicio"){
        document.getElementById('contenido').innerHTML = `<h1 class="formato1">Que es la Agronomía?</h1> <br> <p class="formato2"> Agronomía (del latín ager, ‘campo’, y del griego νόμος nomos, ‘ley’),1​ llamada también ingeniería agronómica, es el conjunto de conocimientos de diversas ciencias aplicadas que rigen la práctica de la agricultura. Es la ciencia cuyo objetivo es mejorar la calidad de los procesos de la producción y la transformación de productos agrícolas y alimentarios. Fundamentada en principios científicos y tecnológicos, estudia los factores físicos, químicos, biológicos, económicos y sociales que influyen o afectan al proceso productivo. Su objeto de estudio es el fenómeno complejo o proceso social del agroecosistema, entendido este como el modelo específico de intervención del ser humano en la naturaleza, con fines de producción de alimentos y materia prima..</p>`
    } else if(current[0].id == "Servicios"){
        document.getElementById('contenido').innerHTML = `<h1 class="formato1">Porque es importante estudiarla?</h1> <br><p class="formato2">Porque es una Ciencia aplicada que permite lograr el desarrollo óptimo, sustentable, ecológico, tecnológico y productivo de las actividades agrícolas, ganaderas o alimentarias. Logrando las mejores condiciones sociales, económicas, ecológicas y sostenibles con el ambiente. <br></p>`
    } else if(current[0].id == "Acerca"){
        document.getElementById('contenido').innerHTML = `<h1 class="formato1">Acerca de la carrera en la UBA </h1> <br><p class="formato2"> La carrera de Agronomía se dicta en Buenos Aires y tiene una duración de 5 años y medio. Su carga horaria total es de 3752 horas, que corresponden a 234,5 créditos de los cuales 218 pertenecen a 52 asignaturas obligatorias y al trabajo final, y el resto a asignaturas electivas y optativas. Al haber aprobado 28 asignaturas obligatorias correspondientes a los tres primeros años, se otorga el título intermedio de Bachiller Universitario en Agronomía (118 créditos). Para obtener el título final de Ingeniero Agrónomo se deben aprobar todas las asignaturas obligatorias, electivas y optativas, incluyendo la elaboración y defensa del Trabajo Final de la carrera.

        La carrera está acreditada por CONEAU (Resolución 454/15) y en el Sistema Regional ARCU-SUR (Resolución 2017 - 00028977 - APN - CONEAU # ME).</p> <br>`
    } else if(current[0].id == "Contacto"){
        document.getElementById('contenido').innerHTML = `<div style="text-align:center">
        <h2 class="formato1">Contactanos</h2>
        <p class="formato2">Envianos tus datos para realizar consultas</p>
      </div>
      <div class="row">
        <div class="column">
          <form action="/action_page.php">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Coloca tu nombre"> <br>
            <label for="apellido">Apellido</label>
            <input type="text" id="apellido" name="apellido" placeholder="Coloca tu apellido"> <br>
            <label for="subject">Motivo de contacto</label> <br>
            <textarea id="subject" name="subject" placeholder="Escribe el motivo de tu contacto" style="height: 200px;width: 400px;background-color:rgb(243, 237, 237);"></textarea><br>
            <input type="submit" value="Enviar"> <br>
          </form>
        </div>
      </div>
    </div>`
    }
  });
}

var current = document.getElementsByClassName("active");