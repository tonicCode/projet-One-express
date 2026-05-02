export class Dialogue{
  
  constructor(){
   // this.nbrPlayers=0;
 this.PlayersName=[4];
    this.howManyPlayers=0;
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
  
  dialogueCard(playerHas){
   
   
    let createShowCards=document.createElement("div");
    //document.body.appendChild(createShowCards);
    
    createShowCards.setAttribute("id","showCardPlayer");
    createShowCards.setAttribute("style","display:flex ; justify-content: center");
    
    
    let showCards=document.getElementById("showCardPlayer");
    
    
    
    //showCards.innerHTML="hello"
    
    //console.log("%",playerHas);
    
    playerHas.forEach(element =>{
      
      
      //console.log("ele :" ,element)
      
      let createDiv=document.createElement("div");
      
      createShowCards.appendChild(createDiv);
      
      document.body.appendChild(createShowCards);
      
      //createDiv.setAttribute("id","divCards");
      
      
      
      //let divCards=document.getElementById("divCards");
      
     // createDiv.style.border=1+"px solid black";
      //createDiv.style.width=20+'px';
     //createDiv.style.height=100+"px"
     
      createDiv.setAttribute("style","display:flex ; margin:10px; border:1px solid black;height:50px")
      
      
      
      createDiv.innerHTML=element;
     createShowCards.style.border=1+"px solid black";
    
    
    });
    
    
    
  }
  
  

dialogueCardsPack(nbOfCards){

  let nbCadsPack=document.getElementById("nbCardsPack");


nbCadsPack.innerHTML=`il reste : ${nbOfCards}  cartes`;

}

  
  
  
  
}




