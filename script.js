let datos2 = [];

function $(selector) {
      return document.querySelector(selector);
    }
    
    function $$(selector) {
      return document.querySelectorAll(selector);
    }
    





const $Balance = $("#Balance");
const $Categoria = $("#Categoria");
const $Reporte= $("#Reporte");
const $seccionBalance =$("#seccionBalance")

const $seccionFiltros=$("#seccionFiltros")
const $seccionOperaciones=$("#seccionOperaciones")
const $seccionCategoria =$("#seccionCategoria")
const $seccionReporte =$("#seccionReporte")
const $seccionNuevaOperacion= $("#seccionNuevaOperacion")
const $nuevaOperacion = $("#nuevaOperacion")





$Balance.addEventListener("click", () => {
      $seccionBalance.style.display = "block";
      $seccionFiltros.style.display = "block";
      $seccionNuevaOperacion.style.display = "none";
      $seccionOperaciones.style.display = "block";
      $seccionCategoria.style.display = "none";
      $seccionReporte.style.display = "none";
})
$Categoria.addEventListener("click", () => {
      $seccionCategoria.style.display = "block";
      $seccionBalance.style.display = "none";
      $seccionFiltros.style.display = "none";
      $seccionNuevaOperacion.style.display = "none";
      $seccionOperaciones.style.display = "none";
      
      $seccionReporte.style.display = "none";
     
})
$Reporte.addEventListener("click", () => {
      $seccionReporte.style.display = "block";
      $seccionCategoria.style.display = "none";
      $seccionBalance.style.display = "none";
      $seccionFiltros.style.display = "none";
      $seccionNuevaOperacion.style.display = "none";
      $seccionOperaciones.style.display = "none";
     
})
$nuevaOperacion.addEventListener("click", () => {
      $seccionNuevaOperacion.style.display = "block";
      $seccionCategoria.style.display = "none";
      $seccionBalance.style.display = "none";
      $seccionFiltros.style.display = "none";
      
      $seccionOperaciones.style.display = "none";
      const $contenedorOperaciones = $("#contenedorOperaciones")
     
})

    