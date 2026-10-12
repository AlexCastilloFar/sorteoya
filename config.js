// ============ CONFIGURACIÓN DE SORTEOYA ============
// Edita SOLO este archivo para cambiar datos, premios o ganadores.
// (index.html no necesitas tocarlo.)

// Enlace CSV de la pestaña "Publico" (Archivo > Compartir > Publicar en la web > CSV)
const CSV_URL = "PEGA_AQUI_EL_ENLACE_CSV";

const WHATSAPP = "51999999999";                          // tu número con código de país, sin +
const FACEBOOK_URL = "https://www.facebook.com/";        // enlace de tu página de Facebook
const CANAL_WSP_URL = "https://whatsapp.com/channel/";   // enlace de tu canal de WhatsApp

// Pagos: sube las imágenes de tus QR junto a index.html con estos nombres
const PAGO = {
  yape: { numero: "965 253 469", nombre: "Alex Castillo", qr: "qr-yape.png" },
  plin: { numero: "965 253 469", nombre: "Alex Castillo", qr: "qr-plin.png" }   // cambia el número si el de Plin es otro
};

// "clave" = texto que aparece en el nombre de la dinámica del formulario
// packCant/packPrecio = promo (2 boletos por S/ 20). El total se calcula solo.
// fechaSorteo: cuando se agoten los números, escribe aquí el día y la hora
const SORTEOS = [
  { clave:"electro", titulo:"Dinámica Electro", precio:12, packCant:2, packPrecio:20, packs:"2 por S/ 20",
    premio:'TV JVC 43" QLED Smart TV', imagen:"tv.jpg",
    otros:[
      {n:"Licuadora Práctika BL-600", img:"licuadora.jpg"},
      {n:"Olla arrocera Pom 1K II", img:"arrocera.jpg"},
      {n:"Hervidor + Cafetera", img:"hervidor-cafetera.jpg"}
    ],
    fechaSorteo:"", desde:1, hasta:130 }
];

// Ganadores: foto = nombre del archivo subido junto a index.html
const GANADORES = [
  {titulo:"Dinámica de S/ 1,100 · ¡Premios entregados!", nombre:"", foto:"ganadores-1100.jpg"},
];
