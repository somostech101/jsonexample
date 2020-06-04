const url = 'http://localhost:3000/alumnos/'

function mostrar(){

fetch(url)
.then(function(response) {
    return response.text();
})
.then(function(data) {
    //console.log(data);
    console.log(data);  
    console.log("numero 1");
    const respuesta = JSON.parse(data);
    console.log(respuesta);
    document.getElementById("demo").innerHTML = respuesta[0].nombre;
    document.getElementById("demo2").innerHTML = respuesta[1].nombre;
    document.getElementById("demo3").innerHTML = respuesta[2].nombre;
    console.log(respuesta.length)

  

// var alumno = {};
// var i;
// for (i = 0; i < respuesta.length; i++) {
// alumno += respuesta[i];
// document.getElementById("demo4").innerHTML = respuesta[i].nombre;

// console.log(respuesta[i].nombre)


// }
 

 
})
.catch(function(err) {
    console.error(err);
    console.log("numero 2");
});

}


function borrar(){
  var element = document.getElementById("contenedor");
  element.classList.add("contenedor-none");
}


// function enviar(){
// var data = {nombre: 'example'};

// fetch("http://localhost:3000/alumnos/", {
//   method: 'POST', // or 'PUT'
//   credentials: 'omit'  ,
//   body: JSON.stringify(data), // data can be `string` or {object}!

// }).then(res => res.json())
// .catch(error => console.error('Error:', error))
// .then(response => console.log('Success:', response));
// }

// enviar();