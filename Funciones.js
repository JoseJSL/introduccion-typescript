var _this = this;
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
//Funciones como expresiones
function saludar(fn) {
    fn("Hola mundo"); //<- Llamado al parametro, que al mismo tiempo es una función    
}
var Caballo = /** @class */ (function () {
    function Caballo(nombre) {
        this.nombre = nombre;
    }
    return Caballo;
}());
var Automovil = /** @class */ (function () {
    function Automovil(nombre) {
        this.nombre = nombre;
    }
    return Automovil;
}());
function construirTransporte(ctr, nombre) {
    return new ctr(nombre);
}
var miCaballo = construirTransporte(Caballo, "Tiro al blanco"); //4: Resulta en una manera de crear clases de forma dinámica con llamado a funciones
var miAuto = construirTransporte(Automovil, "Toyota");
console.log("Mi caballo se llama " + miCaballo.nombre);
console.log("Mi carro es un " + miAuto.nombre);
//Parametros opcionales
function f(num) {
    if (!!num) {
        console.log(num.toFixed(2));
    }
    else {
        console.log("No se puede, no hay tortillas");
    }
}
f(8.333333); //Con parametro
f(); //Sin parametro
//Parametros opcionales en callbacks
function iterador(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]); //<- Index es opcional aquí
    }
}
iterador([1, 2, 3], function (a) { return console.log(a); });
iterador([1, 2, 3], function (a, i) { return console.log(a, i); });
function longitud(x) {
    return x.length;
}
console.log(longitud('Hola mundo'));
console.log(longitud([1, 2, 3, 4, 5]));
//Uso de 'this' en funciones
var user = {
    id: 111,
    admin: false,
    soyAdmin: function () {
        this.admin = true; //Al usarse en una función, this se refiere a la instancia en que se encuentra o que la llamó,es decir, la instancia usuario
    }
};
console.log("Usuario 1: " + user.admin);
user.soyAdmin();
console.log("Usuario 1: " + user.admin);
var user2 = {
    id: 111,
    admin: false,
    soyAdmin: function () {
        _this.admin = true; //Al usarse en una función de flecha, la instancia ya no es el objeto que la llamó. Se creará una nueva variable 'admin' con valor de True, mientras que la original seguirá igual.
    }
};
console.log("Usuario 2: " + user2.admin);
user2.soyAdmin();
console.log("Usuario 2: " + user2.admin);
//Funciones con parametros rest
function multiplicar(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.reduce(function (p, c) {
        return p * c;
    }, n);
}
//Destructuración de parametros
function sumar(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    return a + b + c;
}
var numeros = { a: 1, b: 2, c: 3 };
console.log(sumar({ a: 1, b: 2, c: 3 }));
