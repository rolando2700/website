try {
    var fondoDeBloqueo = document.getElementById("signwall-app");
    fondoDeBloqueo.parentNode.removeChild(fondoDeBloqueo);
} catch (e) {}
try {
    var fondoDeBloqueo2 = document.getElementById("sign-modal");
    fondoDeBloqueo2.parentNode.removeChild(fondoDeBloqueo2);
} catch (e) {}

var htmlDoc = document.getElementsByTagName("html")[0];
htmlDoc.classList.remove("overflow-hidden");

var bodyDoc = document.getElementsByTagName("body")[0];
bodyDoc.classList.remove("overflow-hidden");
bodyDoc.removeAttribute("style");


var textoReportaje = document.getElementById("contenedor");
textoReportaje.removeAttribute("style");