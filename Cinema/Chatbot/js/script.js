const chatBox =
document.getElementById('chat-box');

const messages = [
    { user: "bot",
      text:"Hola! Bienvenido al restaurante italiano.¿En qué puedo ayudarte hoy?" 
    }
];

const options = [
    { text: "Ver menú", response: "Nuestro menú incluye las mas deliciosas pastas de la cultura italiana."},
    { text: "Horarios de apertura", response: "Estamos abierto todos los días de 4 PM a 12 AM"},
    { text: "Ubicacion", response: "Nos encontrados ubicados 250 mts oeste del Parque Metropolitano la Sabana, Plaza del Sol"},
    { text: "Reservas", response: "Para reservas contactar al 2234-7543"},
    { text: "Pedidos para llevar", response: "..."},
    { text: "Sugerencias de Platillos", response: "..."},
    { text: "Promociones y ofertas especiales", response: "..."},
    { text: "Consulta de ingredientes y alergias", response: "..."},
    { text: "Opiniones y Valoraciones", response: "..."},
    { text: "Respuestas a Preguntas Frecuentes", response: "..."}


];

function displayMessages() {
    chatBox.innerHTML = messages.map(message =>
    `<div class="message ${message.user}">
    <img src="${message.user === 'bot' ? 'HALL.jpg' : 'user.jpg'}" alt="${message.user}">
    <div class="message-text">${message.text}</div>
    </div>`
    ).join('') + displayOptions();
}

function displayOptions(){
    return `<div class="options">
        ${options.map(option =>
            `<button class="option" onclick="selectOption('${option.text}')">${option.text}</button>`
        ).join('')}
   </div>`;
}

function selectOption(optionText) {
    const selectedOption = options.find(option => option.text === optionText);

    messages.push({ user: "user", text: optionText});
    setTimeout(() => {
        messages.push({ user: "bot", text: selectedOption.response});
        displayMessages();
    }, 1000);
    displayMessages();
}

document.addEventListener('DOMContentLoaded', displayMessages);