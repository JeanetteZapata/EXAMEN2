function mostrarDetalle(nombre, descripcion, imagen) {
  const detalle = document.getElementById('detalle');
  detalle.innerHTML = `
    <img src="${imagen}" alt="${nombre}">
    <h2>${nombre}</h2>
    <p>${descripcion}</p>
  `;
}