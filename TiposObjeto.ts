//Objetos anonimos
function saludar(persona: {nombre: string; edad: number}){
    return "Hola " + persona.nombre;
}

//Objetos como interfaces
interface Persona{
    nombre: string;
    edad: number;
}
function saludar2(persona: Persona){
    return "Hola " + persona.nombre;
}

//Objetos como alias (type)
type Persona2 = {
    nombre: string;
    edad: number;
}
function saludar3(persona: Persona2){
    return "Hola " + persona.nombre; 
}

//Propiedades opcionales y readonly
interface Computadora {
    os: "windows" | "linux" | "mac";
    monitor?: "crt" | "led"; //<- Propiedad opcional
    readonly memoria: number; //<- Propiedad de solo lectura
    procesador: "intel" | "amd";
}

//Extensión de tipos
interface Direccion{
    nombre: string;
    calle: string;
    numero: number;
    cuidad: string;
    codPostal: string;
}

interface DireccionInternacional extends Direccion{ //<- Tomamos todos los atributos de dirección, pero agregamos unos nuevos sin necesidad de repetirlos código
    pais: string;
}

interface DireccionDepartamento extends Direccion, DireccionInternacional{ //Extensión múltiple 
    unidad: string;
}

//Intersección de tipos
interface PC{
    memoria: string;
    procesador: string;
    hdd: string;
}

interface OS{
    so: string;
    version: string;
}

type Portatil = PC & OS; //<- Creamos un alias que contiene las propiedades de PC  y OS

const macbook: Portatil = {
    memoria: "16G",
    procesador: "intel",
    hdd: "1TB",
    so: "osc",
    version: "catalina",
};

//Objetos genéricos
interface Caja{
    contenido: unknown;
}

let x: Caja = {contenido: "ansina"};

if(typeof x.contenido === "string"){ //Usamos typeof para verificar el tipo de contenido
    console.log(x.contenido.toLocaleLowerCase());
}
console.log((x.contenido as string).toLocaleLowerCase()); //Usamos 'as' para forzar al compilador a tratar contenido como string

//Tipos genericos para atributos dinámicos
interface Box<T>{
    contenido: T;
}

let boxString: Box<string> = {contenido: "string"};
let boxNumero: Box<number> = {contenido: 123};
let boxFecha: Box<Date> = {contenido: new Date()};

//ArrayTypes
const imprimirTareas = (v: Array<string>) =>{
    v.forEach( (v) => {
        console.log(v);
    });
}
const misTareas: string[] = ["levantarse", "limpiar", "sacar al gato"];
imprimirTareas(misTareas);

//Arreglo readonly
const miLista: ReadonlyArray<string> = ["a", "b", "c"];

//Tuplas
type Auto = [string, number];

const prius: Auto = ["Toyota", 2015];
const civic: Auto = ["Honda", 2016];
//Tuplas rest
type StringNumeroBoleanos = [string, number, ...boolean[]];
const a: StringNumeroBoleanos = ["a", 1, true, true, false, false];
