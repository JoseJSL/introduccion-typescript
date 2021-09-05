//Never: No tienen un punto de retorno. No regresan a donde son llamadas
function err(e: string): never{ //Un throw new Error no retorna nunca porque dispara una excepción
    throw new Error(e); 
}

function interrumpir(): never{ //No retorna nunca porque regresa un Error
    return err('Asies');
}

function loop(): never{ //Un loop infinito no retorna nunca
    while(true) {};
}

//Objetos: no primitivos (no number, string, bools, etc)

declare function crearOBJ(obj: object): void;
crearOBJ({propiedad: 0}); // <- Objeto con una propiedad
crearOBJ(null); // <- Objeto con valor nulo (no clase nula)
crearOBJ(undefined); // <- Objeto con valor indefinido (no clase indefinida)
crearOBJ([]); // <- Objeto arreglo

//Type assertions: Son casts que están a responsabilidad del programador. No hay comprobaciones o reestructuración de datos por parte del compilador
let valorString: unknown = "123";
let largoVS: number = (valorString as string).length; //Uso 1: con 'as tipo'.
let largoVS2: number = (<string>valorString).length; //Uso 2: con '<tipo>variable';
console.log(largoVS);
console.log(largoVS2);

//Uniones: Para variables que pueden aceptar diferentes tipos
function imprimirId(id: number | string){
    if(typeof id === "string"){
        console.log(`ID string: ${(id as string).toUpperCase()}`); //Necesitamos el cast "as string" para manejarlo como debe
    } else {
        console.log(`ID numero. ${(id as number).toFixed(2)}`);
    }
}

imprimirId("la id");
imprimirId(3.334445);

//Aliases 
type Punto = {
    x: number;
    y: number;
}
let punto: Punto = {x: 10, y: 20};
console.log(punto.x + ", " + punto.y);

//Interfaces
interface Etiqueta{
    label: string;
}

function imprimirEtiqueta(etiqueta: {label: string}){
    console.log(etiqueta.label);
}

let miEt = {numero: 10, label: 'labelio'}; // <- Aunque se envie un objeto con diferentes atributos, se ignoran los que no son usados en la función
imprimirEtiqueta(miEt);

//Interfaz con atributos opcionales
interface Cuadrado{
    color?: string; //<- Se declara el atributo con un símbolo ? al final del nombre
    ancho: number;
}

//Interfaz con atributos de solo lectura
interface Puntos{
    readonly x: number; //<- Palabra 'readonly' antes del nombre del atributo
    y: number;
}

//Literales
function estadoCivil(estado: 'soltero' | 'casado'){ // <- Se restringe el parametro a solo dos valores posibles
    console.log(estado);
}

estadoCivil('soltero');
