// Obtener referencia al botón de inscripción y a la ventana emergente
const signupButton = document.getElementById('submit-button');
const modal = document.getElementById('myModal');

// Manejar el clic en el botón de inscripción
signupButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Verificar si el formulario está completo
    if (isFormComplete()) {
        // Si el formulario está completo, mostrar la ventana emergente
        showModal();
        // Aquí podrías enviar el formulario si es necesario
        // sendFormToDatabase();
    } else {
        // Si el formulario no está completo, mostrar un mensaje de error o hacer algo más
        console.log('Por favor, completa todos los campos del formulario.');
    }
});

// Función para verificar si el formulario está completo y mostrar advertencias
function isFormComplete() {
    const formFields = [
        { id: 'name', message: 'Completa este campo' },
        { id: 'school', message: 'Selecciona un elemento de la lista' },
        { id: 'average', message: 'Completa este campo' },
        { id: 'phone', message: 'Completa este campo' },
        { id: 'curp', message: 'Completa este campo' },
        { id: 'person-type', message: 'Selecciona un elemento de la lista' },
        { id: 'gender', message: 'Selecciona un elemento de la lista' },
        { id: 'address', message: 'Completa este campo' },
        { id: 'colony', message: 'Completa este campo' },
        { id: 'ext-number', message: 'Completa este campo' },
        { id: 'state', message: 'Selecciona un elemento de la lista' },
        { id: 'municipality', message: 'Completa este campo' },
        { id: 'locality', message: 'Completa este campo' },
        { id: 'postal-code', message: 'Completa este campo' },
        { id: 'email', message: 'Completa este campo' },
    ];

    let isValid = true;

    formFields.forEach(field => {
        const input = document.getElementById(field.id);
        if (!input.value.trim()) {
            input.setCustomValidity(field.message);
            input.reportValidity();
            isValid = false;
        } else {
            input.setCustomValidity('');
        }
    });

    return isValid;
}

// Función para mostrar la ventana emergente
function showModal() {
    // Obtener la ventana emergente
    const modal = document.getElementById('myModal');
    
    // Obtener los valores del promedio general y la opción seleccionada
    const average = parseFloat(document.getElementById('average').value);
    const bachillerato = document.getElementById('school').value;
    
    // Obtener las imágenes
    const passDirectImage = document.getElementById('pass-direct');
    const noPassDirectImage = document.getElementById('no-pass-direct');
    
    // Determinar qué imagen mostrar según las condiciones
    if (average <= 7.9 && bachillerato === "Otro") {
        noPassDirectImage.style.display = 'block'; // Mostrar imagen de no pase directo
        passDirectImage.style.display = 'none'; // Ocultar imagen de pase directo
    } else if (average >= 8.0 && bachillerato === "Otro") {
        noPassDirectImage.style.display = 'block'; // Mostrar imagen de no pase directo
        passDirectImage.style.display = 'none'; // Ocultar imagen de pase directo
    } else if (average <= 7.9 && bachillerato !== "Otro") {
        noPassDirectImage.style.display = 'block'; // Mostrar imagen de no pase directo
        passDirectImage.style.display = 'none'; // Ocultar imagen de pase directo
    } else {
        noPassDirectImage.style.display = 'none'; // Ocultar imagen de no pase directo
        passDirectImage.style.display = 'block'; // Mostrar imagen de pase directo
    }
      
    // Descargar automáticamente la imagen mostrada
    const imageToDownload = average <= 7.9 && bachillerato === "Otro" ? noPassDirectImage : passDirectImage;
    const downloadLink = document.createElement('a');
    downloadLink.href = imageToDownload.src;
    downloadLink.download = 'imagen.jpg'; // Cambia 'imagen.jpg' por el nombre deseado para el archivo descargado
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Mostrar la ventana emergente
    modal.style.display = 'block';
}

// Manejar el clic en el botón de cerrar
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    // Ocultar la ventana emergente al hacer clic en el botón de cerrar
    modal.style.display = 'none';
    // Reiniciar la página
    window.location.reload();
});
