// Definimos la lista de preguntas
const listaPreguntas = [
    new Pregunta("p1", "¿Trabajas para el SOC?", {a:"opcion uno", b:"opcion dos", c:"opcion tres"} ),
    new Pregunta("p2", "¿Impartes CP?", {a:"opcion uno", b:"opcion dos", c:"opcion tres"}),
    new Pregunta("p3", "¿Eres autónomo o asalariado?", {a:"opcion uno", b:"opcion dos", c:"opcion tres"}),
    new Pregunta("p4", "¿Cuántos años de experiencia tienes?", {a:"opcion uno", b:"opcion dos", c:"opcion tres"}),
    new Pregunta("p5", "¿Has sufrido incidencias laborales?", {a:"opcion uno", b:"opcion dos", c:"opcion ters"}),
  
  
  
];

// Carga inicial: Si hay datos en el session storage, los usamos para recuperar el progreso
const estadoGuardado = obtenerDeStorage();
const misPreguntas = estadoGuardado ? estadoGuardado : listaPreguntas;

console.log("Test cargado con", misPreguntas.length, "preguntas.");