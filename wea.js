//Script del Formulario-->

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form_registro").addEventListener("submit", function(event){
        event.preventDefault(); 

        var genero = document.getElementById("genero").value; 
        var nombre_apellidos = document.getElementById("nombre_apellidos").value;
        var FechaNac = document.getElementById("FechaNac").value; 
        var dni = document.getElementById("dni").value;
        var telefono = document.getElementById("telefono").value;
        var nacionalidad = document.getElementById("nacionalidad").value;
        var correo = document.getElementById("correo").value;
        var mensaje = "";

                

        var NacLowCa = nacionalidad.toLowerCase();
                
        if (NacLowCa !== "peruana" && NacLowCa !== "peruano" && NacLowCa !== "perú" && NacLowCa !== "peru") {
            alert("Lo sentimos, solo se acepta nacionalidad Peruana.");
            mensaje = "rechazado";
            return;
        }

        var nacimiento = new Date(FechaNac);
        var hoy = new Date();
        var edad = hoy.getFullYear() - nacimiento.getFullYear();
        var mayor = hoy.getMonth() - nacimiento.getMonth();
        if (mayor < 0 || (mayor === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }

        if (edad >= 18) {
            var HoM = (genero === "Masculino") ? "Sr." : "Sra."; 
            alert("Felicidades, " + HoM + " " + nombre_apellidos.split(" ")[0] + " , usted cuenta con todos los requisitos para inscribirse al seminario de procesamiento de lenguaje natural.");
            mensaje = "Aceptado";
        } else {
            alert("Lo sentimos, debe de ser mayor de edad para ser aceptado.");
            mensaje = "Rechazado";
        }

        const tablebody2 = document.createElement('tr');
        const tablebody = document.getElementById("tablebody");
        tablebody2.innerHTML = `
            <tr> 
                <td>${genero}</td>
                <td>${nombre_apellidos}</td>
                <td>${dni}</td>
                <td>${telefono}</td>
                <td>${nacionalidad}</td>
                <td>${correo}</td>
                <td>${FechaNac}</td>
                <td>${mensaje}</td>
            </tr>
        `;
        tablebody.appendChild(tablebody2);
                
        document.getElementById("tabla_datos").style.display = "";
    });
});

//Script del Buscador-->
function redirectToLink() {
  var query = document.getElementById('searchInput').value;
  if(query) {
    window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=Nz0VDcZj_b5tFnzA" + encodeURIComponent(query);
  }
}

//Script del Formulario de Contactos:

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const selectComunicacion = document.getElementById('comunicacion');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var genero = document.getElementById("genero").value; 
        var nombre_apellidos = document.getElementById("nombre_apellidos").value;
        var telefono = document.getElementById("telefono").value;
        var correo = document.getElementById("correo").value;

        const comunicacionValue = selectComunicacion.value;

        if (comunicacionValue === "mcorreo") {
            var HoM = (genero === "Masculino") ? "Sr." : "Sra."; 
            alert("Un saludo, " + HoM + " " + nombre_apellidos.split(" ")[0] + " , se le ha enviado un correo para poder contactarnos y recibir mas informacion.");
        } else if (comunicacionValue === "mtelefonico") {
            var HoM = (genero === "Masculino") ? "Sr." : "Sra."; 
            alert("Un saludo, " + HoM + " " + nombre_apellidos.split(" ")[0] + " , se le ha enviado un mensaje telefonico para poder contactarnos y recibir mas informacion.");
        } else {
            alert("Por favor, seleccione cómo desea comunicarse.");
        }
    });
})