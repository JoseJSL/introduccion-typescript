//Parametros y valor de retorno
function elevarAlCuadrado(base) {
    return base * base;
}
console.log(elevarAlCuadrado(88));
//Funciones anónimas
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (nom) {
    console.log(nom.toUpperCase());
});
nombres.forEach(function (nom) {
    console.log(nom.toLowerCase());
});
