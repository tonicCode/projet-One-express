
export class Game{
  
  
  constructor(cardOnCenter,cardPlayer){
    
    this.cardOnCenter=cardOnCenter;
    this.cardPlayer=cardPlayer
    this.thereIsCorrespondance="";
    this.recordNum=[];
    this.recordNumOfCenter=[];
    
    
  }
  
  
  throwInCenter(){
    let cardCenter=document.getElementById("cardsCenter");
    
    
    cardCenter.innerHTML=this.cardOnCenter;
    
    this.corespondance();
    
    return this.cardOnCenter;
  }
  



corespondance(){

console.log("tabl :: ",this.cardOnCenter);




this.cardPlayer.forEach(element => {
  
let initialCenterCard=this.cardOnCenter[0].slice(0,3);

let initialPlayersCard=element.slice(0,3);




if(initialCenterCard == initialPlayersCard){

  this.thereIsCorrespondance=initialCenterCard;

}



  let convertInTab=element.split("");
let scanTabPlayer=convertInTab.map(x=>x);




//remplis le tableau de numero présent dans les cartes de joueurs

scanTabPlayer.forEach(elem => {


 let a=Number(elem);
  let b =parseInt(a);


  //  recordNum;
if(!Number.isNaN(a) && elem.trim() !== "") {
this.recordNum.push(a);

}




});

//console.log("record num", this.recordNum);






});

let scanCenter=this.cardOnCenter[0].split("");


console.log("scan",scanCenter);

// this.recordNum.forEach(numero => {
scanCenter.forEach(elem =>{

let x=Number(elem);

let y=parseInt(x);


//  console.log("element :" , y);
  if(!Number.isNaN(x) && elem.trim() !== ""){

    this.recordNumOfCenter.push(x);


console.log("num des carte egale centre:" , this.recordNumOfCenter);
  }


});


  

// })





}

  
  
  
  
  
}




