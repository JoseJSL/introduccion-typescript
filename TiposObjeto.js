//Objetos anonimos
function saludar(persona) {
    return "Hola " + persona.nombre;
}
function saludar2(persona) {
    return "Hola " + persona.nombre;
}
function saludar3(persona) {
    return "Hola " + persona.nombre;
}
var macbook = {
    memoria: "16G",
    procesador: "intel",
    hdd: "1TB",
    so: "osc",
    version: "catalina"
};
var x = { contenido: "ansina" };
if (typeof x.contenido === "string") { //Usamos typeof para verificar el tipo de contenido
    console.log(x.contenido.toLocaleLowerCase());
}
console.log(x.contenido.toLocaleLowerCase()); //Usamos 'as' para forzar al compilador a tratar contenido como string
var boxString = { contenido: "string" };
var boxNumero = { contenido: 123 };
var boxFecha = { contenido: new Date() };
//ArrayTypes
var imprimirTareas = function (v) {
    v.forEach(function (v) {
        console.log(v);
    });
};
var misTareas = ["levantarse", "limpiar", "sacar al gato"];
imprimirTareas(misTareas);
//Arreglo readonly
var miLista = ["a", "b", "c"];
var prius = ["Toyota", 2015];
var civic = ["Honda", 2016];
var a = ["a", 1, true, true, false, false];
