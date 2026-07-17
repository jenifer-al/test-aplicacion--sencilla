let indiceActual = 0;
// Recuperamos el array del Session Storage o usamos la lista original definida en test.js
let preguntas = JSON.parse(sessionStorage.getItem("test_data")) || listaPreguntas;

const contenedor = document.getElementById('contenedor-pregunta');

// Función para mostrar la pregunta actual
const renderizarPregunta = () => {
    const p = preguntas[indiceActual];
    
    const opcionesHTML = Object.entries(p.opciones).map(([key, value]) => `
        <label class="block mb-2 cursor-pointer font-medium">
            <input type="radio" name="${p.id}" value="${value}" ${p.seleccionada === value ? 'checked' : ''}>
            ${value.charAt(0).toUpperCase() + value.slice(1)}
        </label>
    `).join('');

    contenedor.innerHTML = `
        <div class="border-4 border-green-300 border-solid rounded-3xl py-10 w-full max-w-[650px] bg-white px-6 space-y-4">
            <div class="flex flex-col">
                <p class="font-bold mb-4 text-lg">${p.texto}</p>
                ${opcionesHTML}
            </div>
        </div>
    `;
};




// Inicialización de eventos
document.addEventListener('DOMContentLoaded', () => {
    renderizarPregunta();

    document.getElementById('btnSiguiente').addEventListener('click', () => {
        if (indiceActual < preguntas.length - 1) {
            indiceActual++;
            renderizarPregunta();
        }
    });

    document.getElementById('btnAnterior').addEventListener('click', () => {
        if (indiceActual > 0) {
            indiceActual--;
            renderizarPregunta();
        }
    });

   
    
    document.getElementById('btnReiniciar').addEventListener('click', () => {
        sessionStorage.clear();
        location.reload();
    });
});