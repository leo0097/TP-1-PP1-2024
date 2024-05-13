function agregarCampoA(estructura, valor) {
    estructura.a = valor;
  }
  function agregarCampoB(estructura, valor) {
    estructura['b'] = valor;
  }
  // Inicializamos el arreglo con objetos vacíos
  var arreglo = [{}, {}, {}]; 
  
  agregarCampoA(arreglo[0], "Hola, mundo."); // Agregamos un campo 'a' al primer objeto del arreglo
  agregarCampoB(arreglo[1], true); // Agregamos un campo 'b' al segundo objeto del arreglo
  agregarCampoA(arreglo[2], 'F'); // Agregamos un campo 'a' al tercer objeto del arreglo
  agregarCampoB(arreglo[2], 6.3); // Agregamos un campo 'b' al tercer objeto del arreglo
  
  console.log(arreglo[0]);
  console.log(arreglo[1]);
  console.log(arreglo[2]);