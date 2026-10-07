// Esperamos a que el documento HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos el botón por su ID
    const btnSaludo = document.getElementById('btn-saludo');

    // Le añadimos un evento de 'click'
    btnSaludo.addEventListener('click', () => {
        alert('¡Guau! Prepárate para descubrir por qué los Dachshunds son los mejores compañeros.');
        
        // Deslizamiento suave hacia la sección de características
        document.getElementById('caracteristicas').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

});
