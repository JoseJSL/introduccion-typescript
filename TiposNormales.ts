//Booleano
let verdadero: boolean = true;

//Numericos
let entero: number = 6;
let hexadecimal: number = 0xf80d;
let binario: number = 0b1100;
let octal: number = 0o754;

//Strings
let si: string = 'asies';
let no: string = "asinoes";
let quiza: string = `quiza ${si} o quiza ${no}.
Quien sabe`;

//Arreglos
let numericoNormal: number[] = [1800, 999, 8080];
let numericoPotente: Array<number> = [1800, 999, 8080];

//Tuplas
let carreras: [string, number] = ['Software', 3]; //<- Orden importa: str, num
console.log(`Carrera: ${carreras[0]}. Id: ${carreras[1]}`);

//Enum
enum sabores{
    Vainilla,
    Chocolate = 'Cafe',
    Fresa = 'Rosa'
}

let paleta: sabores = sabores.Vainilla;
console.log(paleta); //Imprime 0, que es el ID del atributo. (Por default son numéricos)

paleta = sabores.Fresa;
console.log(paleta); //Imprime 'Rosa', que es el ID personalizado del atributo.

//Any - Unknown
let varTrans: any = "Soy lo que quiero"; //Se usa de manera intencional
let varConfundida: unknown = "No sé lo que soy";//Se usa como placeholder

//Void
function saludado(): void {console.log("Ya te saludé")}; saludado();