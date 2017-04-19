var body=document.getElementsByTagName("body")[0];

//var divContenedor=document.createElement("div");
var cancha=document.createElement("div");
var campo=document.createElement("div");

var areaChicaI=document.createElement("div");
var areaChicaII=document.createElement("div");
var circuloCentral=document.createElement("div");
var balonI=document.createElement("div");
var balonII=document.createElement("div");
var balonIII=document.createElement("div");

//divContenedor.setAttribute("id","area");
//cancha.classList.add("cancha");
cancha.setAttribute("id","cancha");
campo.setAttribute("id","campo")

areaChicaI.classList.add("area");
areaChicaI.setAttribute("id","areaI");
areaChicaII.setAttribute("id","areaII");
areaChicaII.classList.add("area");
circuloCentral.setAttribute("id","circulo");
balonI.classList.add("balon");
balonI.setAttribute("id","balonI");
balonII.classList.add("balon");
balonII.setAttribute("id","balonII");
balonIII.classList.add("balon");
balonIII.setAttribute("id","balonIII");
//circuloCentral.classList.add("area");

cancha.appendChild(balonI);
cancha.appendChild(balonII);
cancha.appendChild(balonIII);
cancha.appendChild(circuloCentral);
cancha.appendChild(areaChicaI);
cancha.appendChild(areaChicaII);
campo.appendChild(cancha);
//divContenedor.appendChild(campo);
body.appendChild(campo);
