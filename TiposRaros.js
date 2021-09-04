//Never: No tienen un punto de retorno. No regresan a donde son llamadas
function err(e) {
    throw new Error(e);
}
function interrumpir() {
    return err('Asies');
}
function loop() {
    while (true) { }
    ;
}
crearOBJ({ propiedad: 0 }); // <- Objeto con una propiedad
crearOBJ(null); // <- Objeto con valor nulo (no clase nula)
crearOBJ(undefined); // <- Objeto con valor indefinido (no clase indefinida)
crearOBJ([]); // <- Objeto arreglo
//Type assertions: Son casts que están a responsabilidad del programador. No hay comprobaciones o reestructuración de datos por parte del compilador
var valorString = "123";
var largoVS = valorString.length; //Uso 1: con 'as tipo'.
var largoVS2 = valorString.length; //Uso 2: con '<tipo>variable';
console.log(largoVS);
console.log(largoVS2);
//Uniones: Para variables que pueden aceptar diferentes tipos
function imprimirId(id) {
    if (typeof id === "string") {
        console.log("ID string: " + id.toUpperCase()); //Necesitamos el cast "as string" para manejarlo como debe
    }
    else {
        console.log("ID numero. " + id.toFixed(2));
    }
}
imprimirId("la id");
imprimirId(3.334445);
