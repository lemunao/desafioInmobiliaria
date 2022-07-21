const properties = [
    {
        nombre: "Departamento",
        descripcion: "Desde las alturas todo se ve mejor",
        src: 'assets/img/departamento.jpg',
        cuartos: 3,
        metros: 200
    },
    {
        nombre: "Casa",
        descripcion: "Casa mediterranea",
        src: "assets/img/casa-mediterranea.jpg",
        cuartos: 5,
        metros: 450
    },
    {
        nombre: "Loft",
        descripcion: "Loft centrico",
        src: "assets/img/loft.jpg",
        cuartos: 1,
        metros: 70
    },
    {
        nombre: "Terreno pucón",
        descripcion: "Terreno urbanizado",
        src: "assets/img/terreno.jpg",
        cuartos: 0,
        metros: 5000
    },
    {
        nombre: "Casa en la playa",
        descripcion: "Casa estilo clasico",
        src: "assets/img/casasplaya.jpg",
        cuartos: 3,
        metros: 150
    },
    {
        nombre: "Casa en la montaña",
        descripcion: "Casa en cordillera de los andes",
        src: "assets/img/casaMontana.jpg",
        cuartos: 2,
        metros: 80
    }

];

var cards = document.querySelector("#cards")
var htmlUpdate = "";

function searchParameters() {
    var metersFrom = document.querySelector("#meters-from").value
    var metersTo = document.querySelector("#meters-to").value
    var roms = document.querySelector("#roms").value
    console.log(metersFrom);

    if (isNaN(metersFrom) || isNaN(metersTo) || isNaN(roms)) {
        alert("Favor ingrese solo números")

    } else if (metersFrom == '' || metersTo == '' || roms == '') {
        alert("Campos no pueden estár vacios")
    } else {
        cards.innerHTML = htmlUpdate
        for (let property of properties) {
            if ((property["metros"] >= metersFrom && property["metros"] <= metersTo) && property["cuartos"] == roms) {
                htmlUpdate += ` <div class="card" style="width: 18rem;">
                                    <img src="${property["src"]} " class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${property["nombre"]}</h5>
                                        <p class="card-text">${property["descripcion"]}</p> 
                                        <p> Cuartos: ${property["cuartos"]}</p>
                                        <p>Metros: ${property["metros"]}</p>
                                        <button>Ver más</button>
                                    </div>
                                </div>`}                     
        }
    }
    cards.innerHTML = htmlUpdate

}