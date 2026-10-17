// ============ CONTADOR DE VISITAS DE SORTEOYA ============
// Guarda cada visita en la pestaña "Visitas" de la hoja de Google (vía el Apps Script).
// No guarda datos personales: solo página, de dónde vino, celular/PC y un id anónimo al azar.
// ACTIVO = false → no envía nada (se activa cuando el Apps Script ya tenga la acción "visita").
(function () {
  var ACTIVO = false;
  if (!ACTIVO) return;
  try {
    var API = (typeof RULETA_API !== "undefined" && RULETA_API) ||
      "https://script.google.com/macros/s/AKfycbzF2CeJKpISVyt2RWDocL05IxqWwb1yxEYAobQ1vxd8Y8O0xvWrVycs6o6ajaaiUcE/exec";
    var q = new URLSearchParams(location.search);

    // ¿De dónde vino? Primero ?utm_source=..., si no, la página anterior.
    var origen = (q.get("utm_source") || "").toLowerCase();
    if (!origen) {
      var r = (document.referrer || "").toLowerCase();
      if (r.indexOf(location.hostname) > -1) origen = "interno";
      else if (/facebook|fb\.|messenger/.test(r)) origen = "facebook";
      else if (/instagram/.test(r)) origen = "instagram";
      else if (/tiktok/.test(r)) origen = "tiktok";
      else if (/google\./.test(r)) origen = "google";
      else if (/bing\.|yahoo\.|duckduckgo/.test(r)) origen = "otro buscador";
      else if (/whatsapp|wa\.me/.test(r)) origen = "whatsapp";
      else if (r) origen = "otro: " + r.split("/")[2];
      else origen = "directo / whatsapp";
    }

    // Id anónimo del navegador y si es su primera visita del día.
    var id = "", nueva = "sí", hoy = new Date().toISOString().slice(0, 10);
    try {
      id = localStorage.getItem("sy_vid");
      if (!id) { id = Math.random().toString(36).slice(2, 10); localStorage.setItem("sy_vid", id); }
      if (localStorage.getItem("sy_dia") === hoy) nueva = "no";
      localStorage.setItem("sy_dia", hoy);
    } catch (e) { id = "sin-id"; }

    var pagina = (location.pathname.split("/").pop() || "index.html").replace(".html", "") || "index";
    var disp = /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "celular" : "pc";

    var url = API + "?accion=visita" +
      "&p=" + encodeURIComponent(pagina) +
      "&o=" + encodeURIComponent(origen.slice(0, 60)) +
      "&v=" + encodeURIComponent((q.get("v") || "").slice(0, 30)) +
      "&d=" + disp + "&id=" + encodeURIComponent(id) + "&n=" + encodeURIComponent(nueva);
    new Image().src = url; // envío silencioso, no afecta la página
  } catch (e) {}
})();
