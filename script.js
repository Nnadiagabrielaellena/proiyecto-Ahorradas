const datos = [
      {
        
       
        Descripcion:"",
        Categoria :"",
        Fecha: "",
        Monto :0,
        Acciones :["Editar","Eliminar"],

        
        },
        
      ];

function $(selector) {
      return document.querySelector(selector);
    }
    
    function $$(selector) {
      return document.querySelectorAll(selector);
    }
    





const $Balance = $(".Balance");
const $Categoria = $(".Categoria");

const $Reporte= $(".Reporte");
const $seccionBalance =$("#seccionBalance")

const $seccionFiltros=$("#seccionFiltros")
const $seccionOperaciones=$("#seccionOperaciones")
const $seccionCategoria =$("#seccionCategoria")
const $seccionReporte =$("#seccionReporte")
const $seccionNuevaOperacion= $("#seccionNuevaOperacion")
const $nuevaOperacion = $("#nuevaOperacion")
const $Fitros = $("#Fitros")






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
    
     
})
//$Fitros.addEventListener("input"()=>{
 //     const montoFiltrado = datos.filter(e=> )
//})


function pintarDatos(){
$seccionOperaciones.innerHTML += `<div id="seccionOperaciones"
class="hidden Operaciones Balance   bg-white rounded-2xl  shadow-xl    m-[20px] p-[15px] w-11/12  ">
<div class="  justify-between lg:text-2xl md:flex">
      <h2 class="operaciones  ">Operaciones</h2>
      <button id="nuevaOperacion" class="  bg-green-200 p-[10px] m-2 "> + Nueva operacion</button>
</div>
<div id="contenedorOperaciones"
      class=" flex-col  imagenNuevaOperacion bg-[./Style/img/imagenNuevoGasto] bg-gray-500 h-[400px] w-11/12 text-lg p-8 ">
      <div class="flex-col justify-between ">
            <button class="text-base">${datos.Categoria}</button>
            <button class="text-base">trabajo</button>
      </div>
      <div class="flex-col justify-between">
            <span>$100000</span>
            <button class="text-xs">Editar</button>
            <button class="text-xs">Eliminar</button>
      </div>
</div>
<div class="flex flex-col items-center">
      <h2 class="flex   text-2xl">Sin Resultados</h2>
      <p class=" flex justify-center m-[40px]">Cambia los filtros o agrega operaciones</p>
</div>

</div>`
}