//Booleano
var verdadero = true;
//Numericos
var entero = 6;
var hexadecimal = 0xf80d;
var binario = 12;
var octal = 492;
//Strings
var si = 'asies';
var no = "asinoes";
var quiza = "quiza " + si + " o quiza " + no + ".\nQuien sabe";
//Arreglos
var numericoNormal = [1800, 999, 8080];
var numericoPotente = [1800, 999, 8080];
//Tuplas
var carreras = ['Software', 3]; //<- Orden importa: str, num
console.log("Carrera: " + carreras[0] + ". Id: " + carreras[1]);
//Enum
var sabores;
(function (sabores) {
    sabores[sabores["Vainilla"] = 0] = "Vainilla";
    sabores["Chocolate"] = "Cafe";
    sabores["Fresa"] = "Rosa";
})(sabores || (sabores = {}));
var paleta = sabores.Vainilla;
console.log(paleta); //Imprime 0, que es el ID del atributo. (Por default son numéricos)
paleta = sabores.Fresa;
console.log(paleta); //Imprime 'Rosa', que es el ID personalizado del atributo.
//Any - Unknown
var varTrans = "Soy lo que quiero"; //Se usa de manera intencional
var varConfundida = "No sé lo que soy"; //Se usa como placeholder
//Void
function saludado() { console.log("Ya te saludé"); }
;
saludado();
