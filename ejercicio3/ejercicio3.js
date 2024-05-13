function buscarLibro() {
    const busqueda = document.getElementById("input").value.toLowerCase().trim();
    
    fetch("libros.json")
      .then(response => response.json())
      .then(libros => {
        const resultados = libros.filter(libro =>
          libro.autor.toLowerCase().includes(busqueda) ||
          libro.titulo.toLowerCase().includes(busqueda)
        );
  
        mostrarResultados(resultados);
      })
      .catch(error => {
        console.error("Error al buscar libros:", error);
      });
  }
  
  function mostrarResultados(resultados) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
  
    if (resultados.length === 0) {
      resultadoDiv.innerHTML = "<p>No se encontraron resultados.</p>";
      return;
    }
  
    const ul = document.createElement("ul");
  
    resultados.forEach(libro => {
      const li = document.createElement("li");
      li.textContent = `${libro.titulo} - ${libro.autor}`;
      ul.appendChild(li);
    });
  
    resultadoDiv.appendChild(ul);
  }