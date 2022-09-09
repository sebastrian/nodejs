let readlineSync=require("readline-sync");
let altura=readlineSync.questionInt("ingrese la altura");
let base=readlineSync.questionInt("indrese la base");
let basePorAltura=altura*base;
console.log("area es de "+ basePorAltura)