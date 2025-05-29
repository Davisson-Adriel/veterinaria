const mascotas = {};
const dueños = {};

function saludo(callback) {
  setTimeout(function () {
    alert("BIENVENIDO :)");
    callback();
  }, 1000);
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function registrardueño(callback) {

    do {
      var id = getRandomInt(1000);
    } while (id in dueños);

    do {
      var name = prompt("Nombre: ");
      if (name.length == 0) {
        alert("No se puede dejar el campo vacio");
      };
    } while (name.length == 0);

    
    do {
      var cedula = (prompt("Cedula (Sin puntuación - 10 Digitos): "));
      var cont = 0;
      if (isNaN(cedula) || cedula.length == 0 || cedula.length < 10) {
        alert("Cedula no valida");
      }
      for (const i in dueños) {
        for (const j in dueños[i]) {
          if (j == "Cedula") {
            if (dueños[i][j] == cedula) {
              alert("Cedula ya existente");
              cont = 1;
            }
          };
        };
      };
    } while (isNaN(cedula) || cedula.length == 0 || cedula.length < 10 || cont == 1);

    setTimeout(function () {

    do {
      var telefono = (prompt("Telefono (Sin espacios - 10 digitos): "));
      if (isNaN(telefono) || telefono.length == 0 || telefono.length < 10) {
        alert("Telefono no valido");
      }
    } while (isNaN(telefono) || telefono.length == 0 || telefono.length < 10);

    do {
      var email = prompt("Correo Electrónico: ");
      if (email.length == 0) {
        alert("No se puede dejar el campo vacio");
      };
    } while (email.length == 0);

    const datos = {
      Nombre: name,
      Cedula: cedula,
      Telefono: telefono,
      Correo: email
    };

    dueños[id] = datos;
    alert("Registro Exitoso")
    callback();
  }, 1500);

};

function registrar(callback) {
    var cont = 0;
    var cont2 = 0;

    do {
      var id = getRandomInt(1000);
      for (const i in mascotas) {
        for (const j in mascotas[i]) {
          if (j == "Id") {
            if (mascotas[i][j] == id) {
              cont2 = 1;
            };
          };
        };
      };
    } while (cont2 == 1);

    do {
      var cedula = prompt("Ingrese la cedula del dueño: ");
      for (const i in dueños) {
        for (const j in dueños[i]) {
          if (j == "Cedula") {
            if (dueños[i][j] == cedula) {
              cont = 1;
              var dueno = i;
            }
          };
        };
      };
      if (cont == 0) {
        alert("Dueño no Registrado");
      };
    } while (cont == 0);

  setTimeout(function () {

    do {
      var name = prompt("Nombre de la mascota: ");
      if (name.length == 0) {
        alert("No se puede dejar el campo vacio");
      };
    } while (name.length == 0);

    do {
      var especie = prompt("Especie: ");
      if (especie.length == 0) {
        alert("No se puede dejar el campo vacio");
      };
    } while (especie.length == 0);

    do {
      var edad = (prompt("Edad (Años): "));
      if (isNaN(edad) || edad.length == 0) {
        alert("Valor no valido");
      }
    } while (isNaN(edad) || edad.length == 0);

    do {
      var peso = (prompt("Peso (Kg): "));
      if (isNaN(peso) || peso.length == 0) {
        alert("Valor no valido");
      }
    } while (isNaN(peso) || peso.length == 0);

    do {
      var opc = Number(prompt("Seleccione el estado de la mascota \n 1. Sano \n 2. Enfermo \n 3. En recuperación"));
      switch (opc) {
        case 1:
          estado = "Sano";
          break;
        case 2:
          estado = "Enfermo";
          break;
        case 3:
          estado = "En recuperación";
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
      Estado: estado,
      Id: id,
      IdDueno: dueno
    };

    mascotas[name] = datos;
    callback();
  }, 2000);
};

async function buscar() {
  
      var busq = prompt("Ingrese el nombre: ");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (busq in mascotas) {
        console.log(busq);
        console.log("-------------------");
        for (const j in mascotas[busq]) {
          console.log(j, " - ", mascotas[busq][j]);
        };
      } else {
        alert("Mascota no registrada");
      };
};

async function actualizar() {
  var busq = prompt("Ingrese el nombre: ");
  if (busq in mascotas) {
    do {
      var opc = Number(prompt("Seleccione el estado de la mascota \n 1. Sano \n 2. Enfermo \n 3. En recuperación"));
      switch (opc) {
        case 1:
          estado = "Sano";
          break;
        case 2:
          estado = "Enfermo";
          break;
        case 3:
          estado = "En recuperación";
          break;
        default:
          alert("Valor invalido");
          break;
      }
    } while (opc !== 1 && opc !== 2 && opc !== 3);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    mascotas[busq]["Estado"] = estado;
    alert("Estado Actualizado");
  } else {
    alert("Mascota no registrada");
  };
};

async function eliminar() {
  
      var busq = prompt("Ingrese el nombre de la mascota a eliminar: ");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (busq in mascotas) {
        delete mascotas[busq];
        alert("Mascota Eliminada con exito");
      } else {
        alert("Mascota no registrada");
      };
};

async function verpordueño() {
  var cont = 0;
  do {
    var cedula = prompt("Ingrese la cedula del dueño: ");
    for (const i in dueños) {
      for (const j in dueños[i]) {
        if (j == "Cedula") {
          if (dueños[i][j] == cedula) {
            cont = 1;
            var num = i;
          }
        };
      };
    };
    if (cont == 0) {
      alert("Dueño no Registrado");
    };
  } while (cont == 0);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  for (const i in mascotas) {
    for (const j in mascotas[i]) {
      if (j == "IdDueno") {
        if (mascotas[i][j] == num) {
          for (const x in mascotas) {
            console.log(x);
            console.log("-------------------");
            for (const z in mascotas[x]) {
              console.log(z, " - ", mascotas[x][z]);
            };
          };
        };
      };
    };
  };
};

saludo(function () {
  menu();
});

async function menu() {
  let salir = false;
  while (!salir) {
    var opc = Number(prompt(" 1. Registrar Dueño \n 2. Registrar Mascota \n 3. Listar Mascotas \n 4. Buscar por nombre \n 5. Actualizar estado de salud \n 6. Eliminar mascota \n 7. Buscar Mascota por Dueño \n 8. Salir "));
    switch (opc) {
      case 1:
        await new Promise((resolve) => registrardueño(resolve));
        break;
      case 2:
        await new Promise((resolve) => registrar(resolve));
        break;
      case 3:
        await listar();
        break;
      case 4:
        await buscar();
        break;
      case 5:
        await actualizar();
        break;
      case 6:
        await eliminar();
        break;
      case 7:
        await verpordueño();
        break;
      case 8:
        alert("Saliendo...");
        salir = true;
        break;
      default:
        alert("Valor invalido");
        break;
    }
  }
};

async function listar() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  for (const i in mascotas) {
    console.log(i);
    console.log("-------------------");
    for (const j in mascotas[i]) {
      console.log(j, " - ", mascotas[i][j]);
    };
  };
};
