// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Que fatalidad, eres mi héroe y mi villana", time: 12 },
  { text: "Podría enloquecer descifrando tu conspiración", time: 18 },
  { text: "Muero por saber el desenlace de esta trama", time: 25 },
  { text: "Anochecer y el corazón va al descubierto", time: 32 },

  { text: "Debo interpretar tus gritos, tus llamadas, tus caricias", time: 42 },
  { text: "Entre cortadas y tus arranques de pasión", time: 49 },
  { text: "Debo buscar dentro de tanto desperfecto", time: 56 },
  { text: "La moraleja de este cuento, debo domar tu corazón", time: 63 },

  { text: "En la oscuridad, son los instintos los que mandan", time: 75 },
  { text: "Qué más quieres romper, de corazones tienes colección", time: 82 },
  { text: "Ya va a amanecer y sigo en esta encrucijada", time: 90 },
  { text: "Misterio de mujer, solo será cuestión de tiempo", time: 97 },

  { text: "Debo interpretar tus gritos, tus llamadas, tus caricias", time: 108 },
  { text: "Entre cortadas y tus arranques de pasión", time: 115 },
  { text: "Debo buscar dentro de tanto desperfecto", time: 122 },
  { text: "La moraleja de este cuento, debo domar tu corazón", time: 129 },

  { text: "Y debo de enterrar el filo de tu espada en los secretos", time: 142 },
  { text: "De tu almohada hasta que entiendas la lección", time: 149 },
  { text: "Debo llegar al fondo de este desparpajo", time: 156 },
  { text: "Que yo de esta no me rajo hasta domar tu corazón", time: 162 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);