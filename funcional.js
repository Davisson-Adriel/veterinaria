const mascotas = {};

saludo(function(){
  
  menu();

});

function saludo(callback) {
  
  setTimeout(function(){
    alert("BIENVENIDO AL SISTEMA :)");
    callback();
  }, 3000);
  
};

function registrar(){
  
  var name = prompt("Nombre: ");
  var especie = prompt("Especie: ");

  do {
      var edad = Number(prompt("Edad (Años): "));

      if (isNaN(edad)){
        alert("Valor no valido");
      }
    } while (isNaN(edad));

    do {
      var peso = Number(prompt("Peso (Kg): "));

      if (isNaN(peso)){
        alert("Valor no valido");
      }
    } while (isNaN(peso));

    do {

    var opc= Number(prompt("Seleccione el estado de la mascota \n 1. Sano \n 2. Enfermo \n 3. En recuperación"));

    switch (opc) {

      case 1:
        estado="Sano";
        break;
      case 2:
        estado="Enfermo";
        break;
      case 3:
        estado="En recuperación";
        break;
      default:
        alert("Valor invalido");
        break;

    }

  } while (opc !== 1 && opc !== 2 && opc !== 3);


  const datos = {
    Especie: especie,
    Edad: edad,
    Peso: peso,
    Estado: estado
  };
  mascotas[name] = datos; 

};

function listar(){

  for (const i in mascotas){
    console.log(i);
    console.log("-------------------");
    for (const j in mascotas[i]){
      console.log(j," - ", mascotas[i][j]);
    }
  }

};

function buscar(){

  var busq = prompt("Ingrese el nombre: ");

  if (busq in mascotas){
      console.log(busq);
      console.log("-------------------");
      for (const j in mascotas[busq]){
        console.log(j," - ", mascotas[busq][j]);
      };
   
  } else {

    alert("Mascota no registrada");

    };
};

function actualizar(){

  var busq = prompt("Ingrese el nombre: ");

  if (busq in mascotas){
      
  do {

    var opc= Number(prompt("Seleccione el estado de la mascota \n 1. Sano \n 2. Enfermo \n 3. En recuperación"));

    switch (opc) {

      case 1:
        estado="Sano";
        break;
      case 2:
        estado="Enfermo";
        break;
      case 3:
        estado="En recuperación";
        break;
      default:
        alert("Valor invalido");
        break;

    }

  } while (opc !== 1 && opc !== 2 && opc !== 3);

    mascotas[busq]["Estado"]=estado;

    alert("Estado Actualizado")
  
  } else {

    alert("Mascota no registrada");

    };

};

function eliminar(){

  var busq = prompt("Ingrese el nombre de la mascota a eliminar: ");

  if (busq in mascotas){
      
    delete mascotas[busq];
    alert("Mascota Eliminada con exito");

  } else {

    alert("Mascota no registrada");

    };

}

function menu(){
  do {

    var opc= Number(prompt(" 1. Registrar Mascota \n 2. Listar Mascotas \n 3. Buscar por nombre \n 4. Actualizar estado de salud \n 5. Eliminar mascota \n 6. Salir "));

    switch (opc) {

      case 1:
        registrar();
        break;
      case 2:
        listar();
        break;
      case 3:
        buscar();
        break;
      case 4:
        actualizar();
        break;
      case 5:
        eliminar();
        break;
      case 6:
        alert("Saliendo...");
        break;
      default:
        alert("Valor invalido");
        break;

    }

  } while (opc!=6);
};