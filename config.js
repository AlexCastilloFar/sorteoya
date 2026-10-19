// ============ CONFIGURACIÓN DE SORTEOYA ============
// Edita SOLO este archivo para cambiar datos, premios o ganadores.
// (index.html no necesitas tocarlo.)

// Enlace CSV de la pestaña "Publico" (Archivo > Compartir > Publicar en la web > CSV)
const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTwWu0HjWZL_Y6dK0eJceDsj19NXJ6dITplf5xPLezKVzSRs1vmkRRgRZ3BscZ6lMPKqAjvY5_VQ7M/pub?gid=643863470&single=true&output=csv";

const WHATSAPP = "51965253469";                                                  // tu número con código de país, sin +
const FACEBOOK_URL = "https://www.facebook.com/1SorteoYa";                        // enlace de tu página de Facebook
const CANAL_WSP_URL = "https://whatsapp.com/channel/0029VbDEnNL0G0Xlb7Ehzt27";    // enlace de tu canal de WhatsApp

// Pagos: sube las imágenes de tus QR junto a index.html con estos nombres
const PAGO = {
  yape: { numero: "965 253 469", nombre: "Alex Castillo", qr: "qr-yape.png" },
  plin: { numero: "965 253 469", nombre: "Alex Castillo", qr: "qr-plin.png" }
};

// "clave" = texto que aparece en el nombre de la dinámica del formulario
// tarifas = precios por cantidad de boletos. El total se calcula solo con la combinación más barata.
// fechaSorteo: cuando se agoten los números, escribe aquí el día y la hora
// Cada línea de premios termina en coma, menos la última de cada lista.
const SORTEOS = [
  { clave:"electro", titulo:"Dinámica Electro", precio:12,
    tarifas:[{cant:1,precio:12},{cant:2,precio:20},{cant:3,precio:25}],
    premios:[
      {n:"Refrigeradora 248 L No frost", img:"refrigeradora.jpg"},
      {n:"Cocina a gas 4 hornillas con horno", img:"cocina.jpg"},
      {n:'TV 43" QLED Smart TV', img:"tv.jpg"}
    ],
    otros:[
      {n:"S/ 500 en efectivo", img:"premio-500.jpg"},
      {n:"S/ 300 en efectivo", img:"premio-300.jpg"},
      {n:"S/ 200 en efectivo", img:"premio-200.jpg"},
      {n:"S/ 150 en efectivo", img:"premio-150.jpg"},
      {n:"S/ 200 en efectivo", img:"premio-consuelo.jpg", tag:"PREMIO CONSUELO", nota:"Para quien compre más boletos y no haya ganado ningún premio"}
    ],
   mostrarLista:false, fechaSorteo:"", desde:1, hasta:600 } 
];

// Ganadores: foto = nombre del archivo subido junto a index.html
const GANADORES = [
  {titulo:"Dinámica de S/ 1,100 · ¡Premios entregados!", nombre:"", foto:"ganadores-1100.jpg"},
];

// Lista completa de ganadores (página "Ver todos los ganadores").
// Cada dinámica es un bloque; cada ganador: premio, nombre y boleto (boleto:"" si aún no lo tienes).
// Escribe el nombre como quieras que se vea (ej: "Alex Castillo"). Para agregar una dinámica nueva, copia un bloque.
const LISTA_GANADORES = [
  { dinamica:"Dinámica de S/ 1,100", fecha:"", ganadores:[
      {premio:"Premio 1 · S/ 500",  nombre:"Mireya Zeña",     boleto:"228"},
      {premio:"Premio 2 · S/ 200",  nombre:"Matthew Guzman",  boleto:"245"},
      {premio:"Premio 3 · S/ 200",  nombre:"George Camacho",  boleto:"248"},
      {premio:"Premio 4 · S/ 200",  nombre:"Edwar Bello",     boleto:""},
      {premio:"Premio consuelo · S/ 20", nombre:"Mercedes Farfan", boleto:""},
      {premio:"Premio consuelo · S/ 20", nombre:"Gabriela Chavez", boleto:""},
      {premio:"Premio consuelo · S/ 20", nombre:"Yasmin Silva",    boleto:""}
  ]}
];
