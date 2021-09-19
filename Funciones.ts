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

//Funciones como expresiones
function saludar(fn: (a: string) => void){
    fn("Hola mundo");  //<- Llamado al parametro, que al mismo tiempo es una función    
}

//Constructor signature
interface Transporte{
    nombre: String;
}

class Caballo implements Transporte{ //1: Creamos una clase que implemente una interfaz
    constructor(public nombre: string){}
}

class Automovil implements Transporte{
    constructor(public nombre: string){}
}

type ConstructorDeTransporte = {new (nombre: string): Transporte;}; //2: Creamos un type, que coincida con la firma de la interfaz creada

function construirTransporte(ctr: ConstructorDeTransporte, nombre: string){// 3: Creamos una función que acepte una clase que coincida con la interfaz creada
    return new ctr(nombre);
}

const miCaballo = construirTransporte(Caballo, "Tiro al blanco"); //4: Resulta en una manera de crear clases de forma dinámica con llamado a funciones
const miAuto = construirTransporte(Automovil, "Toyota");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi carro es un " + miAuto.nombre);

//Parametros opcionales
function f(num?: number){ //Parametro opcional
    if(!!num){
        console.log(num.toFixed(2));
    } else{
        console.log("No se puede, no hay tortillas");
    }
}

f(8.333333); //Con parametro
f(); //Sin parametro


//Parametros opcionales en callbacks
function iterador(arr: any[], callback: (arg: any, index?: number) /*index es opcional */ => void){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]); //<- Index es opcional aquí
    }    
}

iterador([1, 2, 3], (a) => console.log(a));
iterador([1, 2, 3], (a, i) => console.log(a, i));

//Funciones con overload
function longitud(x: any[]): number; //Declaraciones múltiples sin cuerpo
function longitud(x: string): number;
function longitud(x: any): number{ //Implementación de la función
    return x.length;
}
console.log(longitud('Hola mundo'));
console.log(longitud([1, 2, 3, 4, 5]));

//Uso de 'this' en funciones
const user = {
    id: 111,
    admin: false,
    soyAdmin: function(){
        this.admin = true; //Al usarse en una función, this se refiere a la instancia en que se encuentra o que la llamó,es decir, la instancia usuario
    }
}
console.log("Usuario 1: " + user.admin);
user.soyAdmin();
console.log("Usuario 1: " + user.admin);

const user2 = {
    id: 111,
    admin: false,
    soyAdmin: () => {
        this.admin = true;//Al usarse en una función de flecha, la instancia ya no es el objeto que la llamó. Se creará una nueva variable 'admin' con valor de True, mientras que la original seguirá igual.
    }
}
console.log("Usuario 2: " + user2.admin);
user2.soyAdmin();
console.log("Usuario 2: " + user2.admin);


//Funciones con parametros rest
function multiplicar(n: number, ...m: number[]): number{ //<- Variable m toma todos los parametros que le siguen a 'n' y los junta en un arreglo
    return m.reduce((p, c) =>{
        return p* c;
    }, n);
}

//Destructuración de parametros
function sumar({a, b, c}: {a: number; b:number; c: number}): number{
    return a + b + c;
}
const numeros = {a: 1, b: 2, c: 3};
console.log(sumar({a: 1, b: 2, c: 3}));
