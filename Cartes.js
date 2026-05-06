export class Cartes{
  
  
 constructor(value=[11],color=[4],cartePlus2=[8]){

this.value=value;
this.color=color;
this.cartePlus2=cartePlus2;
this.allCartes=[52];
this.allCartesBlend=[56];
this.cardDistribPlayer;
this.cardForComputer;
this.centerCard;
//this.createDisplayCenterCards;
   this.createDisplayPiocheCards=document.getElementById("pioche");
   this.elemPiocheCards;

   this.containerCenterCard=document.getElementById("containerCardsCenter");
   this.elemCenterCards=document.getElementById("cardsCenter");


this.countCenterCards;
this.cardsInThePack=[];
this.cardTakeColor;


this.createDivForCards;
this.allNumFromCardsPlayers=[];

this.saveElementCard;

this.clickOnPack=document.getElementById("containerPaquet");

this.clickOnCardPlayers=document.getElementById("showCardPlayers");


 }
  
  
createCartes(){


 let count=-1;
  let count2=-1;
let cardTypeA=[52];
let cardTypeB=[];

//create all cards


 this.value.forEach(elemValue =>{
  this.color.forEach(elemColor =>{
   count++;
//  console.log("COUNTER",count);
   cardTypeA[count]=elemColor+" "+elemValue;
   
 // console.log("el",cardTypeA);
   

   
  });
  
  
  
 });


this.cartePlus2.forEach(elemCartePlus2 =>{
count2++;

 cardTypeB[count2]=elemCartePlus2;
// console.log(elemCartePlus2);
 
 
// console.log("@", cardTypeB);
});


this.allCartes=[...cardTypeA,...cardTypeB];



return this.allCartes;

}

//fonction provisoire
stepByStep(step){
 let rslt="";
 
 
 //console.log("etape :", step);
 
 rslt=prompt("continuer ?");
 
 return rslt;
}


//check si le tableau possede des doublons et les suprime

toCheckDuplicate(tab){
 
 //let resultTab=[56];
 
 
/* for(let i=1;i<56;i++){
  
  let randomIndex = Math.round(Math.random() * 56);
  resultTab.push(randomIndex);
  
  console.log("pq",resultTab);
  
 }*/
 

 
 
 
 return [...new Set(tab)];
}





toBlendIndex(){
 let cartesMelanger=[];
 let indexTabMelanger=0;
 let n=-1;
let randomIndex = 0;
 

while( n<300){
 randomIndex=Math.round(Math.random() * 56);
 
 n++;
 
 
indexTabMelanger=this.toCheckDuplicate(cartesMelanger).length-1;

//console.log("index debut de boucle",indexTabMelanger);





if(indexTabMelanger <=57){
cartesMelanger[n]=randomIndex;



//passe les index melanger à la fonction suivante

this.toBlendCard(this.toCheckDuplicate(cartesMelanger));


//console.log("index de fin de boucle",n);
 
 
}

 
 
 
 
}
  
  
 // return cartesMelanger;
}
  
  
  
  toBlendCard(indexMix){
   
   let carteNonMelange=[];
   
   let cartesMelanger=[57];
   let counter=-1;
   let a=0;
   
   //console.log("€€€#",indexMix)
   
  carteNonMelange=this.createCartes();
   
   carteNonMelange.forEach( elem =>{
   counter++;
   // let a=0;
    a=indexMix[counter];
    
this.allCartesBlend[a]=elem;
   // console.log("dans l autre function",this.allCartesBlend);
   // console.log("%",indexMix);
    //console.log("%%",cartesMelanger);
    
   });
   
   //console.log("paquet",cartesMelanger)
   
  }
  
  
  //prepare 5 cartes à donner aux joueurs 
  
toPrepareDistrib(nbCards){
 
 
 //console.log("nb : " , nbCards);
let tab1;
let tab2;


let nbCarteARetirer=5;
let cartesAuxCentre=1;
let totalARetirer=0;
totalARetirer=nbCarteARetirer*nbCards;
 
 

tab1=this.allCartesBlend.splice(0,totalARetirer);
tab2=this.allCartesBlend.splice(0,totalARetirer);



this.centerCard=this.allCartesBlend.splice(0,cartesAuxCentre);



this.cardDistribPlayer=tab1;
console.log("new tableau :",this.cardDistribPlayer);
this.cardForComputer=tab2;
// console.log("tab de depart :", this.allCartesBlend);

// }


 
}  
  
// toGetUpdateTab(tableauxPaquet){


// this.allCartesBlend=tableauxPaquet


// return this.allCartesBlend;
// }



  
  
  
  
initEventClick(){

this.clickOnPack.addEventListener("click",() => this.Piocher());
this.clickOnCardPlayers.addEventListener("mouseover",() => this.giveIsColor());



}




  
  //afficher carte de la pile , pouvoir l'extraire au click lors du piochage, le retirer de son tableau 1 à 1 et a partir de la fin
  
  Piocher = () => {
   
    let carte;
   // carte=this.allCartesBlend.splice(0,1);
   
let pioche=document.getElementById("pioche");



let a=getComputedStyle(pioche).height;
let convert=parseInt(a);

console.log("taille :" , convert);

if(convert < 700 ){
carte=this.allCartesBlend.pop();
this.cardsInThePack.push(carte);
   



console.log("la pioche", this.allCartesBlend);
console.log("pack", this.cardsInThePack);


   this.toDisplayPioche();
}
   
   //return this.allCartesBlend;
   
   
  }
  
  
 toDisplayPioche(){
   

   
   
   this.elemPiocheCards=document.createElement("div");
   
   this.createDisplayPiocheCards.appendChild(this.elemPiocheCards);
   
   
   this.elemPiocheCards.setAttribute("style","border:1px solid red;height:50px ;display:flex; align-items:center");
   
   
   this.elemPiocheCards.innerHTML=this.cardsInThePack[this.cardsInThePack.length-1];
   
    this.displayNbCardsPack();
   
   
   
   
   
 }
  
displayNbCardsPack(){

//console.log("&&&&&", this.allCartesBlend.length)


    return this.allCartesBlend.length;
  }
  
  
  




toCreateDisplayCards(cartePl){
  
//console.log("test",cartePl);
  
  
  
  cartePl.forEach(element =>{
  
this.createDivForCards=document.createElement("div");
  
  this.clickOnCardPlayers.appendChild(this.createDivForCards);
  
  
  this.createDivForCards.setAttribute("style","display:flex ; margin:10px; border:1px solid black;height:50px");
  
  
  
   this.createDivForCards.innerHTML=element;
    
  });
  
  

  
  
  
  
  
}


// methode qui remplis un tableau de numero 
toGetNumb(){

let filt;
let tab=[];
 
  Array.from(this.clickOnCardPlayers.children).forEach(elem => {

    let word=elem.textContent;

     filt=word.replace(/\D/g,"");
     tab.push(Number(filt));




  });


console.log("*****repl**** :",tab);

}


//methode qui rempli un tableau de symboles

toGetSymbols(){
let filt;
let isNum;
let tab=[];
 
  Array.from(this.clickOnCardPlayers.children).forEach(elem => {

    let word=elem.textContent;
  filt=word.replace(/[^\p{Emoji}]/gu,"");
isNum=Number(filt);
  

console.log("filter",Number(filt));
  if(!Number.isNaN(filt) ){

if(Number.isNaN(isNum) || filt == "🎨"){
//  console.log("####",filt);

tab.push(filt);

}

   


console.log("#### tab :",tab);

  }

  
  
    // finder= word.split("");







// finder=word.find(s => s == "🎨");

console.log("w",word);



switch(filt){

case "🎨" : 
 tab.push(finder);
    
break;
    case "🚫":

break;

case "🔃" :
  

    

}
    //  filt=word.replace(/\D/g,"");





  });


console.log("@@@symb@@@ :",tab);




}





  
  giveIsColor(){



Array.from(this.clickOnCardPlayers.children).forEach(child =>{

let mot=child.textContent;

let convert=mot.slice(0,3);

if(convert == "red"){

  child.style.backgroundColor="red";
}else if( convert == "blu"){

  child.style.backgroundColor="blue";
}else if(convert == "gre"){
  child.style.backgroundColor="green";
}else if(convert == "yel"){
  child.style.backgroundColor="yellow";
}else {
  child.style.backgroundColor="grey";
}



this.saveElementCard=child;


// console.log("change color :",this.cardTakeColor);

//met couleur sur les cartes joueurs 

if(this.cardTakeColor==convert ){

  child.style.backgroundColor="orange";
}




});




 Array.from(this.containerCenterCard.children).forEach(childr=> {

  let mot=childr.textContent;
  let convert=mot.slice(0,3);

let num=mot.replace(/\D/g, "");


//  console.log("&", num);
 
let res=this.allNumFromCardsPlayers.find(n => n == num);

//console.log("r",res);
//console.log("§§",this.saveElementCard);
if(res !== undefined){

  childr.style.backgroundColor="orange";
let index=this.allNumFromCardsPlayers.findIndex(n => n == res);
//console.log("index",index);




}


if(this.cardTakeColor == convert){

  childr.style.backgroundColor="orange";
}

})










}

  
  
}
