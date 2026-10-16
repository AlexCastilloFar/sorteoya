// ============ CONFIGURACIÓN DE SORTEOYA ============
// Edita SOLO este archivo para cambiar datos, premios o ganadores.
// (index.html no necesitas tocarlo.)

// Enlace CSV de la pestaña "Publico" (Archivo > Compartir > Publicar en la web > CSV)
const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQTwWu0HjWZL_Y6dK0eJceDsj19NXJ6dITplf5xPLezKVzSRs1vmkRRgRZ3BscZ6lMPKqAjvY5_VQ7M/pub?gid=643863470&single=true&output=csv";

const WHATSAPP = "51965253469";                          // tu número con código de país, sin +
const FACEBOOK_URL = "https://www.facebook.com/1SorteoYa";        // enlace de tu página de Facebook
const CANAL_WSP_URL = "https://whatsapp.com/channel/0029VbDEnNL0G0Xlb7Ehzt27";   // enlace de tu canal de WhatsApp

// Pagos: sube las imágenes de tus QR junto a index.html con estos nombres
const PAGO = {
  yape: { numero: "965 253 469", nombre: "Alex Castillo", qr: "qr-yape.png" },
  plin: { numero: "965 253 469", nombre: "Alex Castillo", qr: "qr-plin.png" }   // cambia el número si el de Plin es otro
};

// "clave" = texto que aparece en el nombre de la dinámica del formulario
// packCant/packPrecio = promo (2 boletos por S/ 20). El total se calcula solo.
// fechaSorteo: cuando se agoten los números, escribe aquí el día y la hora
const SORTEOS = [
  { clave:"electro", titulo:"Dinámica Electro", precio:12, tarifas:[{cant:1,precio:12},{cant:2,precio:20},{cant:3,precio:25}],
    premios:[
      {n:"Refrigeradora Electrolux 138L", img:"refrigeradora.jpg"},
      {n:"Cocina a gas Mabe 4 hornillas con horno", img:"cocina.jpg"},
      {n:'TV JVC 43" QLED Smart TV', img:"tv.jpg"}
    ],
    otros:[
      {n:"Licuadora Práctika BL-600", img:"licuadora.jpg"},
      {n:"Olla arrocera Pom 1K II", img:"arrocera.jpg"},
      {n:"Hervidor + Cafetera", img:"hervidor-cafetera.jpg"},
      {n:"S/ 500 en efectivo", img:"premio-500.png"},
      {n:"S/ 300 en efectivo", img:"premio-300.png"},
      {n:"S/ 200 en efectivo", img:"premio-200.png"},
      {n:"S/ 150 en efectivo", img:"premio-150.png"},
      {n:"S/ 200 en efectivo", img:"premio-consuelo.png"", 
    tag:"PREMIO CONSUELO", nota:"Para quien compre más boletos y no gane otro premio"}
    ],
    fechaSorteo:"", desde:1, hasta:600 }
];

// Ganadores: foto = nombre del archivo subido junto a index.html
const GANADORES = [
  {titulo:"Dinámica de S/ 1,100 · ¡Premios entregados!", nombre:"", foto:"ganadores-1100.jpg"},
];
