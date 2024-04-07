// var referintaDB = firebase.database().ref();
// var referintaMasini = referintaDB.child("masini");
// var referintaDB = firebase.database().ref();
// var referintaMasini = referintaDB.child("masini");

// referintaMasini.on("child_added",masina =>{
//     console.log(masina.val());
// })
import listaMasini from './masini.json' assert{
    type :'json'
    
}
var url = new URL(window.location.href)
var parametru = url.searchParams.get("numeMasina")
console.log(parametru)

var lista = listaMasini.masini;
console.log(lista) 
var lungimeLista = lista.length;

if(parametru!=null){
    cautare(parametru)
}else{
    for(var i=0;i<lungimeLista; i++){
        var obj =lista[i]
        console.log(obj)
        afisareCard(obj)
    }
}


var input = document.getElementById("bara-cautare")
input.addEventListener("keyup", eveniment =>{
    if(eveniment.keyCode == 13){
        console.log(input.value)
        cautare(input.value)
    }
})
function cautare(numeMasina){
    /* dupa ce cautam masina vrem sa eliminam toate cardurile*/
    document.getElementById("container-rezultate").innerHTML = "";

    /* parcurgem toate masinile si verificam daca numele lor contine ce am pus in input */
    for(var i=0;i<lungimeLista; i++){
        if(lista[i].nume.includes(numeMasina)){
            afisareCard(lista[i]);
        }        
    }

}
function afisareCard(masina){
    var divCard = document.createElement("div")
    divCard.className = "card"
    var rowCard = document.createElement("div")
    rowCard.className = "row"
    var colMD5 = document.createElement("div")
    colMD5.className = "col-md-5"
    var img = document.createElement("img")
    img.className = "imagine-card"
    img.src = masina.poza;
    img.width=500;
    colMD5.appendChild(img)
    var colMD7 = document.createElement("div")
    colMD7.className = "col-md-7"
    
    var divContinut = document.createElement("div");
    divContinut.getElementsByClassName = "continut-card";
    
var titluCard = document.createElement("h4");
    titluCard.className = "titlu-card";
    titluCard.textContent = masina.nume;
    divContinut.appendChild(titluCard);

    var textCard1 = document.createElement("h6");
    textCard1.textContent = "Marca:" + masina.marca;
    divContinut.appendChild(textCard1);

    var textCard2 = document.createElement("h6");
    textCard2.textContent = "Pret:" + masina.pret+ " EURO";
    divContinut.appendChild(textCard2);

    var textCard3 = document.createElement("h6");
    textCard3.textContent = "Cai Putere:" + masina.cai;
    divContinut.appendChild(textCard3);

    var textCard4 = document.createElement("p");
    textCard4.textContent = masina.descriere;
    divContinut.appendChild(textCard4);

    colMD7.appendChild(divContinut);
    rowCard.appendChild(colMD5);
    rowCard.appendChild(colMD7);
    divCard.appendChild(rowCard);

    document.getElementById("container-rezultate").appendChild(divCard);
}
