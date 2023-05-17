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

    }else if(id==="pulgada"){
        pul = valor;
        met = 0.0254 * valor;
        pie = 0.0833333 * valor;
        yar = 0.0277778 * valor;


    }else if(id==="pie"){
        pie = valor;
        met = 0.3048 * valor;
        pul = 12 * valor;
        yar = 0.333333 * valor;


    }else if(id==="yarda"){
        yar = valor;
        met = 0.9144 * valor;
        pul = 3.28084 * valor;
        pie = 3 * valor;


    }

    document.lasUnidades.unid_metro.value = met;
    document.lasUnidades.unid_pulgada.value = pul;
    document.lasUnidades.unid_pie.value = pie;
    document.lasUnidades.unid_yarda.value = yar;



}

/**
 * Permite convertir grados a radianes y viceversa.
 * @method convertirGR
 * @param {string} id - Id del input del formulario.
 * @param {number} valor - Valor del input
 */

let convertirGR = (id, valor) =>{
    let grad, rad;

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