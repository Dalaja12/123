// Importa las funciones que necesitas del SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBd8VEqwpRCytHpmPTOGAn7vfJVpZknpbg",
    authDomain: "inscripciones-bbaf3.firebaseapp.com",
    projectId: "inscripciones-bbaf3",
    storageBucket: "inscripciones-bbaf3.appspot.com",
    messagingSenderId: "679964288319",
    appId: "1:679964288319:web:e33df3d48d5cce0ee1df8a",
    measurementId: "G-24SRJMJYKZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Obtén una referencia a la base de datos Firestore
const db = getFirestore(app);

// Función para enviar el formulario a la base de datos
function sendFormToDatabase() {
    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const school = document.getElementById('school').value;
    const average = document.getElementById('average').value;
    const phone = document.getElementById('phone').value;
    const curp = document.getElementById('curp').value;
    const rfc = document.getElementById('rfc').value || null;
    const personType = document.getElementById('person-type').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const colony = document.getElementById('colony').value;
    const extNumber = document.getElementById('ext-number').value;
    const state = document.getElementById('state').value;
    const municipality = document.getElementById('municipality').value;
    const locality = document.getElementById('locality').value;
    const postalCode = document.getElementById('postal-code').value;
    const email = document.getElementById('email').value;

    // Guardar los datos en Firestore
    addDoc(collection(db, 'students'), {
        name: name,
        school: school,
        average: average,
        phone: phone,
        curp: curp,
        rfc: rfc,
        personType: personType,
        gender: gender,
        address: address,
        colony: colony,
        extNumber: extNumber,
        state: state,
        municipality: municipality,
        locality: locality,
        postalCode: postalCode,
        email: email
    }).then(() => {
        // Mostrar un mensaje de éxito
        alert('Inscripción exitosa');
        // Reiniciar el formulario
        signupForm.reset();
    }).catch((error) => {
        // Manejar los errores
        console.error('Error al inscribir al alumno: ', error);
    });
}

// Manejar el clic en el botón de inscripción
signupButton.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Verificar si el formulario está completo
    if (isFormComplete()) {
        // Si el formulario está completo, mostrar la ventana emergente
        showModal();
        // Enviar el formulario a la base de datos
        sendFormToDatabase();
    } else {
        // Si el formulario no está completo, mostrar un mensaje de error o hacer algo más
        console.log('Por favor, completa todos los campos del formulario.');
    }
});

// Manejar el clic en el botón de cerrar
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    // Ocultar la ventana emergente al hacer clic en el botón de cerrar
    modal.style.display = 'none';
    // Reiniciar la página
    window.location.reload();
});

// Función para mostrar la ventana emergente
function showModal() {
    // Obtener la ventana emergente
    const modal = document.getElementById('myModal');
    // Mostrar la ventana emergente
    modal.style.display = 'block';
}

// Función para verificar si el formulario está completo
function isFormComplete() {
    const name = document.getElementById('name').value;
    const school = document.getElementById('school').value;
    const average = document.getElementById('average').value;
    const phone = document.getElementById('phone').value;
    const curp = document.getElementById('curp').value;
    const personType = document.getElementById('person-type').value;
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value;
    const colony = document.getElementById('colony').value;
    const extNumber = document.getElementById('ext-number').value;
    const state = document.getElementById('state').value;
    const municipality = document.getElementById('municipality').value;
    const locality = document.getElementById('locality').value;
    const postalCode = document.getElementById('postal-code').value;
    const email = document.getElementById('email').value;

    // Verificar si todos los campos obligatorios están completos
    if (name && school && average && phone && curp && personType && gender && address && colony && extNumber && state && municipality && locality && postalCode && email) {
        return true;
    } else {
        return false;
    }
}
