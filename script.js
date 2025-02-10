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
function pintarDatos(arrayPersonajes) {
      $sectionContainCards.innerHTML = "";
      for (const { image, name, species, house, gender, alive, dateOfBirth } of arrayPersonajes) {
        $sectionContainCards.innerHTML += `<div class="flex flex-col justify-center items-center border border-2 border-black rounded-xl w-5/6 md:w-5/12 lg:w-3/12 mx-8 my-2 h-72">
          <img src="${image}" class="h-24 w-24">
          <p>Nombre: ${capitalize(name)}</p>
          <div class="flex flex-row justify-around w-full flex-wrap">
            <p class="w-2/5">Especie: ${capitalize(species)}</p>
            <p class="w-2/5">Casa: ${capitalize(house)}</p>
            <p class="w-2/5">Genero: ${capitalize(gender)}</p>
            <p class="w-2/5">Nacimiento: ${dateOfBirth ? dateOfBirth : "Desconocido"}</p>
            <p class="w-2/5">Vivo: ${alive ? "Si, esta vivito" : "No, se despidio"}</p>
          </div>
        </div>`;
      }
    }`            `
    function pintarDatos(arrayPersonajes) {
      $contenedorOperaciones.innerHTML = "";
      for (const { Descripcion, Categoria, Fecha, Monto,} of arrayPersonajes) {
        $contenedorOperaciones.innerHTML += `<div id ="contenedorOperaciones"class=" flex justify-between  imagenNuevaOperacion bg-[./Style/img/imagenNuevoGasto] bg-gray-500 h-[400px] w-11/12 text-lg p-8">
        <p>Descripción</p>
        <p>Categoría</p>
        <p>Fecha</p>
        <p>Monto</p>
        <p>Acciones</p>
  </div>`
      }
    }