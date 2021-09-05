//Parametros y valor de retorno
function elevarAlCuadrado(base: number): number{
    return base*base;
}

console.log(elevarAlCuadrado(88));

//Funciones anónimas
const nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (nom){  //Para cada valor de la matriz, llamalo 'nom' y haz...
    console.log(nom.toUpperCase());
});

nombres.forEach((nom) => { //Definicion sin la palabra function, solo con '() => {}'
    console.log(nom.toLowerCase());
});