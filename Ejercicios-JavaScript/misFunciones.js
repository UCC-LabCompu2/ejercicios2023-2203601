/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas.
 * @param {number} valor -  El valor de los inputs de metros, yardas, pies o pulgadas.
 * @return
 */

let cambiarUnidades = (id, valor) =>{

    //Cración de Variables
    let met, pul, pie, yar;

    if(valor.includes(",")){
        valor = valor.replace("," , ".");
    }


    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        met = "";
        pul =  "";
        pie = "";
        yar =  "";

    }else if(id==="metro"){
        met = valor;
        pul = 39.3701 * valor;
        pie = 3.28084 * valor;
        yar = 1.09361 * valor;
        console.log("Conversion de metros a otros valores");
        console.log(+valor);

    }else if(id==="pulgada"){
        pul = valor;
        met = 0.0254 * valor;
        pie = 0.0833333 * valor;
        yar = 0.0277778 * valor;
        console.log("Conversion de pulgadas a otros valores");
        console.log(+valor);

    }else if(id==="pie"){
        pie = valor;
        met = 0.3048 * valor;
        pul = 12 * valor;
        yar = 0.333333 * valor;
        console.log("Conversion de pie a otros valores");
        console.log(+valor);

    }else if(id==="yarda"){
        yar = valor;
        met = 0.9144 * valor;
        pul = 3.28084 * valor;
        pie = 3 * valor;
        console.log("Conversion de yarda a otros valores");
        console.log(+valor);

    }

    document.lasUnidades.unid_metro.value = Math.round(met*100)/100;
    document.lasUnidades.unid_pulgada.value =pul.toFixed(2);
    document.lasUnidades.unid_pie.value = pie.toFixed(2);
    document.lasUnidades.unid_yarda.value = Math.round(yar*100)/100;



}

/**
 * Permite convertir grados a radianes y viceversa.
 * @method convertirGR
 * @param {string} id - Id del input del formulario.
 * @param {number} valor - Valor del input
 */

let convertirGR = (id, valor) =>{
    let grad, rad;
    console.log("El valor enviado a la funcion es: " +valor);

    if(isNaN(valor)) {
        alert("Se ingreso un valor invalido");
        grad = "";
        rad = "";

    } else if(id==="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI)/180;
    }else if(id==="radianes"){
        rad = document.getElementById("radianes").value;
        grad= (rad * 180)/Math.PI;
    }

    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;


}

/**
 * Permite visualizar y ocultar un div dentro de la página.
 * @method omstrar_oculta
 * @param {string} valor - Valor asociado a un radio button del html.
 */
let mostrar_ocultar = (valor) => {
    console.log("El valor enviado a la funcion es: " +valor);
    if(valor === "val_mostrar"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    }else{
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

/**
 * Suma 2 valores ingresados por el usuario.
 * @method sumar
 */
let sumar = () =>{

    let num1, num2, res;
    num1 = document.getElementById("nums1").value
    num2 = document.getElementById("nums2").value
    res = Number(num1) + Number(num2);
    document.getElementById("totalS").innerHTML = res;


}

let resta = () =>{

    let num1, num2, res;
    num1 = document.getElementById("numr1").value
    num2 = document.getElementById("numr2").value
    res = Number(num1) - Number(num2);
    document.getElementById("totalR").value = res;


}

let mult = () =>{

    let num1, num2, res;
    num1 = document.getElementById("numm1").value
    num2 = document.getElementById("numm2").value
    res = Number(num1) * Number(num2);
    document.getElementById("totalM").value = res;


}

let division = () =>{

    let num1, num2, res;
    num1 = document.getElementById("numd1").value
    num2 = document.getElementById("numd2").value


    res = Number(num1) / Number(num2);
    document.getElementById("totalD").value = res;


}

let generarUrl = () =>{

    const dist = document.getElementById("distancia").value;

    const unid = document.getElementsByName("unidades")[0].value;

    const urlComp = "segundaWeb.html#" + dist + "#" + unid;

    window.open(urlComp, "_self")



}

let cargaValores = () =>{

    let urlCompleta = window.location.href.split("/")[5];

    const distancia = urlCompleta.split("#")[1]
    const unidad = urlCompleta.split("#")[2]
    document.getElementById("dist").value = distancia + " " + unidad;

}

let guardarDatosLS = () =>{

    const dist = document.getElementById("distancia").value;

    const unid = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadesLS", unid);
    window.open("WEB2.html");

}

let tomarDatosLS = () =>{

    const cant = localStorage.getItem("distanciaLS");

    const un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value= cant +  " " + un ;

}

let dibujarCirculoCuadrado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax= canvas.width;
    const alturMax= canvas.height;

    ctx.beginPath();
    ctx.fillStyle = "#8b36b6";
    ctx.arc(anchoMax/2, alturMax/2, 100,0 , 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    const margen = 8;

    ctx.beginPath();
    ctx.fillStyle = "#b63692";
    ctx.fillRect(0+margen, 600-100, 150,100);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}


let limpiarCanvas = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}
var bandera;

let dibujar = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};

    if(bandera) {
        ctx.fillRect(posX - 10, posY - 121, 5, 5);
        ctx.fill();
    }

}