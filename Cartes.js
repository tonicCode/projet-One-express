export class Cartes{
  
  
 constructor(value=[11],color=[4],cartePlus2=[8]){

this.value=value;
this.color=color;
this.cartePlus2=cartePlus2;
this.allCartes=[52];
this.allCartesBlend=[56];
this.cardDistribPlayer;
this.centerCard;
this.countCenterCards;
this.cardsInThePack=[];





this.clickOnPack=document.getElementById("containerPaquet");



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


let nbCarteARetirer=5;
let cartesAuxCentre=1;
let totalARetirer=0;
totalARetirer=nbCarteARetirer*nbCards;
 
 

tab1=this.allCartesBlend.splice(0,totalARetirer);

this.centerCard=this.allCartesBlend.splice(0,cartesAuxCentre);

// this.toGetUpdateTab(this.allCartesBlend);


this.cardDistribPlayer=tab1;
console.log("new tableau :",tab1);
// console.log("tab de depart :", this.allCartesBlend);

// }


 
}  
  
// toGetUpdateTab(tableauxPaquet){


// this.allCartesBlend=tableauxPaquet


// return this.allCartesBlend;
// }



  
  
  
  
initEventClick(){

this.clickOnPack.addEventListener("click",() => this.Piocher());

}




  
  //afficher carte de la pile , pouvoir l'extraire au click lors du piochage, le retirer de son tableau 1 à 1 et a partir de la fin
  
  Piocher = () => {
   
    let carte;
   // carte=this.allCartesBlend.splice(0,1);
   

carte=this.allCartesBlend.pop();
this.cardsInThePack.push(carte);
   
console.log("la pioche", this.allCartesBlend);
console.log("pack", this.cardsInThePack);


   this.toDisplayPioche();
   
   
   //return this.allCartesBlend;
   
   
  }
  
  
 toDisplayPioche(){
   
   let cardsPiocheContainer=document.getElementById("pioche");
   
   
   let createElem=document.createElement("div");
   
   cardsPiocheContainer.appendChild(createElem);
   
   
   createElem.setAttribute("style","border:1px solid red;height:50px ;display:flex; align-items:center");
   
   
   createElem.innerHTML=this.cardsInThePack[this.cardsInThePack.length-1];
   
    this.displayNbCardsPack();
   
   
   
   
   
 }
  
displayNbCardsPack(){

//console.log("&&&&&", this.allCartesBlend.length)


    return this.allCartesBlend.length;
  }
  
  
  
  
  
}
