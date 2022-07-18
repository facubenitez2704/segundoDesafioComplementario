
//descripcion de productos disponibles
const zapatillas ={ tipo: "deportivas", talle: 40, color: "blancas"};
const botas ={ tipo:"cueroEco", talle: 43, color: "negras"};
const ojotas ={ tipo: "goma", talle: 39, color: "azul" };

//array de productos disponibles.
const productos =[zapatillas, botas, ojotas];
console.log(productos[0]);
console.log(productos[1]);
console.log(productos[2]);

//agregamos algunos productos nuevos al array
const sandalias ={ tipo: "ecocuero", talle: 40, color: "rojas"};
const zapatos ={ tipo: "fiesta", talle: 41, color:"marron oscuro"};
const pantuflas ={ modelo: "harry potter", talle: 37, color:"negro"}
productos.push(sandalias, zapatos, pantuflas);
console.log(productos);

//agregamos un producto sin stock y lo borraremos para modo de practica
productos.unshift("chancletas viejas");
console.log(productos.length);

productos.shift();
console.log(productos);

console.log(productos.indexOf(zapatos)); //solo para pruba para saber el lugar deñ array.
console.log(productos.indexOf(pantuflas));


for( const productoRecorrido of productos){
    console.log(productoRecorrido);
}


//creamos otro array con descripcion del nombre del producto para mostrar a usuario atraves de un alert!
const nombresProductos =["zapatillas deportivas", "botas", "ojotas", "sandalias", "zapatos", "pantuflas de harry"];
for (let i = 0; i < nombresProductos.length; i++)
alert(nombresProductos[i] + " " + "disponible");

//------------------------------------------------------------------------------------


const prodSale = [];

function agregarProductosSale(prodcutosOferta){
prodSale.push(prodcutosOferta);
console.log(prodSale);
}
agregarProductosSale({cod: 2233, nombre: "zapas pipon", color: "azul", talle:40})
agregarProductosSale({cod: 2234, nombre: "ojotas pipon", color: "azul", talle:39})
agregarProductosSale({cod: 2235, nombre: "chanclas pipon", color: "verdes", talle:44})
agregarProductosSale({cod: 2236, nombre: "zapatos tutti", color: "negros", talle:41})
agregarProductosSale({cod: 2237, nombre: "botas tutti", color: "negras", talle:35})
agregarProductosSale({cod: 2238, nombre: "remeras rock", color: "negras", talle:"small"})
agregarProductosSale({cod: 2239, nombre: "muscolas rock", color: "blanca", talle: "large"});

let resultado = prodSale ;

let prodcutosSale = prompt(" Te gustaria conocer nuestros prodcutos en oferta?");
if (prodcutosSale == "si"){
alert("okey!! estos son los articulos"+ resultado);
}
else {
alert("okey!! muchas gracias de todas formas!");
}




