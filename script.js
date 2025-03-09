function mostrarDetalles(id) {
    const detalle = document.getElementById(id);
    const estaActivo = detalle.classList.contains('activo');

    // Oculta todos los detalles primero
    document.querySelectorAll('.detalle').forEach(d => {
        d.classList.remove('activo');
    });

    // Muestra el detalle seleccionado si no estaba activo
    if (!estaActivo) {
        detalle.classList.add('activo');
    }
}