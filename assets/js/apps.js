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
    },
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descripcion: "Despierta tus días oyendo el oceano",
      src:"https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Ten cerca de ti todo lo que necesitas",
      src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:"https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      descripcion: "Desde las alturas todo se ve mejor",
      src:"https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src:"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500
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