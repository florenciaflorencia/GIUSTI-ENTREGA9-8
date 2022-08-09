
let titulo=document.getElementById("titulo");
titulo.style.fontFamily="Montserrat";
titulo.style.font="bold 80px";
titulo.style.backgroundColor="red";
let titulosecundario=document.getElementById("titulosecundario");
titulosecundario.style.font="bold 60px";



const productos = [{ id: 1,  nombre: "BOWLS", precio: 1005 },
                  {  id: 2,  nombre: "SETS BOWLS", precio: 5729 },
                  {  id: 3,  nombre: "MOLDES DE HELADO"  , precio: 2455},
                  {  id: 4,  nombre: "SETS CUBIERTOS" , precio: 5250},
                  {  id: 5,  nombre: "ORGANIZADORES" , precio: 3544}];


let cartas=document.getElementById("cartas");
for(const producto of productos){
    let carta=document.createElement("div");
    carta.className="card col-md-3";
    carta.innerHTML=`
        <div class="card-body">
            <h4 class="card-title">${producto.nombre}</h4>
            <p class="card-text">${producto.precio}</p>
            <a href="#" class="btn btn-primary">COMPRAR</a>
        </div>
    `;
    cartas.append(carta);
}

let tabla=document.createElement("table");
tabla.className="table table-dark table-striped";
let tablaBody=document.createElement("tbody");

for(const producto of productos){
    tablaBody.innerHTML+=`
    <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
    </tr>
    `;
}
tabla.append(tablaBody);
let tablass=document.getElementById("tablass");
tablass.append(tabla);
