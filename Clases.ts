//Estructura y campos de una clase
class Punto{
    x: number; //Tipo numero
    y = 0; //Se transforma a tipo numero
    readonly z; //Tipo any y de solo lectura

    constructor(x:number, y:number, z:number){
        if(!!z){
            this.z = z; //<- Podemos asignar valor a Z solo porque nos encontramos en el constructor
        }
        this.x = x; this.y = y;
    }

    asignarValoresNuevos(x: number, y: number, z:number){
        this.x = x;
        this.y = y;
        //this.z = z <- Nos marca error, pues no estamos en el constructor
    }
}

//Sobrecarga de un constructor
class Punto2{
    constructor(x: number, y: number);
    constructor(s: string);
    constructor(xs: number | string, y?: number){}
}

//Super()
class Figura{
    lados = 0;
}
class Cuadrado extends Figura{
    constructor(){
        //this.lados = 2 <- Nos marcará error
        super(); //<- Una vez llamado a super(), podremos utilizar 'this'
        this.lados = 2;
    }
}

//Métodos y anotaciones
let titulo = "Video 1";
class Video{
    titulo: string;
    constructor(titulo: string){
        this.titulo = titulo;
    }

    reproducir(){
        console.log(this.titulo + " se está reproduciendo.");
    }

    cambiarTitulo(nuevoTitulo: string){
        titulo = nuevoTitulo; //<- Al no utilizar 'this', estamos haciendo referencia a la variable que está fuera de la clase, con el contenido "Video 1"
        this.titulo = nuevoTitulo; //<- Aquí hacemos referencia al atributo de la clase
    }
}

//Getters y setters
class Desfile{
    private _participantes = 0;

    get participantes(): number {return this._participantes};

    set participantes(p: number){
        console.log("Se cambiaron los participantes a " + p); //Normalmente se utilizan los sets para cuando se necesite realizar una acción extra al momento de cambiar un atributo
        this._participantes = p;
    }
}
const desfileHoy = new Desfile;
desfileHoy.participantes = 100; //<- Set utilizado como si fuese un atributo más

//Herencia
interface Encendible{
    encender(): void;
    apagar(orden: number):  void;
}

class TV implements Encendible{
    encender(){console.log("Se encendió la TV")}; //<- La interface Encendible nos obliga a tener que implementar esta función o el compilador marcará error

    apagar(orden){} //<- Aquí se puede asumir que orden toma el tipo numérico de la interfaz, pero realmente se convierte en any si no se define
}

//Extends
class Animal{
    moverse(){
        console.log("El animal se mueve");
    }
}

class Perro extends Animal{ //<- Con extends, se obtienen todas las propiedades y metodos de la clase padre, sin necesidad de reimplementarse como sucede con lsa interfaces
    ladrar(){
        console.log("El perro ladra");
    }
}
const firulais = new Perro();
firulais.moverse(); //<- Método de la clase padre
firulais.ladrar();

//Sobrecarga
class Padre{
    saludar(){
        console.log("Hola");
    }
}

class Hijo extends Padre{
    saludar(nombre?: string){
        if(!!nombre){
            console.log("Hola, " + nombre);
        } else {
            super.saludar(); //<- Si no recibimos el parametro, implementamos la sobrecarga al llamar al método de la clase padre.
        }
    }
}

//Orden de inicilización de las clases derivadas.
class Definicion{
    nombre = "Definicion"; //<- Primero se inicializan los campos de la clase base

    constructor(){ //<- Segundo se ejecuta el constructor de la clase base
        console.log("Mi nombre es " + this.nombre);
    }
}

class Implementacion extends Definicion {} //Después se sigue lo que se hizo en la clase base, pero ahora de la derivada
const a = new Implementacion();

//Visibilidad
class Carta{
    public Destinatario: string;
    protected Remitente: string = "El Primero";
    private Contenido; //<- Solo podremos acceder desde la misma clase en que se declaró

    protected getRemitente(): string{
        return "Yopororo";
    }
}

class CartaPeroDiferente extends Carta{
    public getRemitente(): string{
        return this.Remitente; //<- Atributo protected se puede acceder desde la clase base y las subclases
    }
}

const carta: CartaPeroDiferente = new CartaPeroDiferente();
carta.Destinatario = "Otros" //<- Podemos acceder desde fuera a un atributo public

class Base{
    protected m = 10;
    protected n = 8;
    private j = 11;

    imprimirJ(objeto: Base){
        console.log(objeto.j); //<- Aquí podemos acceder a los atributos privados de otro objeto, pues técnicamente estamos dentro de la clase de éste.
    }
}

class Derivada extends Base{
    m = 5; //<- Este es un atributo de la clase nuevo, completamente diferente al atributo protejido de la clase Base
}

class Derivada2 extends Derivada{
    imprimirN(clase: Derivada){
        //console.log(clase.n) <- Aquí no podemos acceder a N, pues el atributo protected solo permite acceder a las clases hijas directas de la clase base
    }
}

const derivado: Derivada = new Derivada();
derivado.m = 99 //<- Aquí se accede al atributo que no está protejido, creado en la clase derivada

//Miembros estáticos
class MiClase{
    static x = 10; //<- Este atributo estático se comparte entre todas las instancias de esta clase, es decir, todas las instancias apuntarán a la misma dirección de memoria
}
MiClase.x += 1; //<- También podremos acceder a los valores static utilizando el nombre de la clase como si fuese un objeto

//Clases genericas
class Caja<T>{
    contenido: T;
    constructor(value: T){
        this.contenido  = value;
        console.log(this.contenido);
    }
}

type Juguete = {
    nombre: string; 
};

const misJuguetes: Juguete[] = [];
misJuguetes.push({nombre: "Pelota"});
misJuguetes.push({nombre: "YoYo"});

const miCajaDeJuguetes: Caja<Juguete[]> = new Caja(misJuguetes); //Podemos crear una caja 'dinámica', que se adapte a cualquier type que se le indique


//This types
