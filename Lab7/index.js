// Función para crear una publicación
function createPost(name, message, imageURL, counter) {
    let postHTML = `
      <div class="post">
        <div class="counter">#${counter}</div>
        <img src="${imageURL}" alt="${name}">
        <h2>${name}</h2>
        <p>${message}</p>
      </div>
    `;
    return postHTML;
  }
  
  // Generar las 826 publicaciones
  for (let i = 1; i <= 826; i++) {
    // Obtener la URL de la imagen
    let imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;
  
    // Crear la publicación
    let postHTML = createPost("Rick and Morty", "¡Mira esta imagen!", imageURL, i);
  
    // Agregar la publicación al contenedor
    let postsContainer = document.getElementById("posts-container");
    postsContainer.innerHTML += postHTML;
  }
  