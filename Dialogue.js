export class Dialogue{
  
  constructor(){
   // this.nbrPlayers=0;
 this.PlayersName=[4];
    this.howManyPlayers=0;
   // this.showCardPlayers=document.getElementById("showCardPlayers");
  }
  
  
  
  createDial(){
    let a=0;
    //let tab=[4];
    
   
    
    
    while(a==0 || a>=5){
    a=prompt("combien de joueurs? (max 4 joueurs)");
    
    }
    
    
    for(let i=0;i<a;i++){
      
      
      
    this.PlayersName[i]=prompt(`comment s apelle le joueur ${i}`);
     
   //  console.log(" joueur sont",tab);
  
      
   //  console.log("%");
    };
    
    
   this.howManyPlayers=a; 
  
    return this.PlayersName;
  }
  
  
  
  
  dialogueTours(dial){
    
    let createDisplayTurn=document.createElement("p");
   document.body.appendChild(createDisplayTurn);
  
    
    
    
   prompt("c est au tour de"+" "+ dial + " "+this.PlayersName[dial-1]);
   // console.log("&",this.PlayersName)
    
   createDisplayTurn.innerHTML=`c'est ${this.PlayersName[dial-1]} qui ouvre le jeux `; 
    
    
  }
  
  dialogueCard(playerHas, computerHas){
   
   // console.log("##" , computerHas);
   
   // let createShowCards=document.createElement("div");
    //document.body.appendChild(createShowCards);
    
    //createShowCards.setAttribute("id","showCardPlayer");
    //createShowCards.setAttribute("style","display:flex ; justify-content: center");
    
    
    //let showCards=document.getElementById("showCardPlayers");
    
    
    
    playerHas.forEach(element =>{
          let createDiv=document.createElement("div");
      
      //showCards.appendChild(createDiv);
      
     // document.body.appendChild(createShowCards);
      
     
     // createDiv.setAttribute("style","display:flex ; margin:10px; border:1px solid black;height:50px")*/
      
      
      // //console.log("ele :" ,element)
      
      // let createDiv=document.createElement("div");
      
      // createShowCards.appendChild(createDiv);
      
      // document.body.appendChild(createShowCards);
      
     
      // createDiv.setAttribute("style","display:flex ; margin:10px; border:1px solid black;height:50px")
      
      
      // affiche les carte du joueur
     // showCards.innerHTML=element;
     //createShowCards.style.border=1+"px solid black";
    
    });
    
let containerComput=document.getElementById("containerPaquetAdverse");

    computerHas.forEach(element =>{
      
      
      //console.log("ele :" ,element)
      
      let createDiv2=document.createElement("div");
      
      containerComput.appendChild(createDiv2);
      
      //document.body.appendChild(createShowCards);
      
     
      createDiv2.setAttribute("style","display:flex ; margin:10px; border:1px solid black;height:50px")
      
      
      // affiche les carte du joueur
      createDiv2.innerHTML=element;
    // createShowCards.style.border=1+"px solid black";
    
    });












    
    
  }
  
  

dialogueCardsPack(nbOfCards){

  let nbCadsPack=document.getElementById("nbCardsPack");

console.log("!!!!",nbOfCards);



nbCardsPack.innerHTML=`il reste : ${nbOfCards}  cartes`;

}

  
  
  
  
}




