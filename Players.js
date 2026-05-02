export class Players{
  
  //4 joueurs max à l express
  
  constructor(playersName=[4],nbrPlayers){
   
   this.playersName=playersName;
   this.nbrPlayers=nbrPlayers;
   this.playerOpenTheGame;
   this.playerGetCards;
    
  }
  
  
  turnChoices(){
    
   let random=0;
    
    

  
random=Math.floor(Math.random()*this.nbrPlayers+1);


this.playerOpenTheGame=this.playersName[random];
    
//console.log("return",random);
  // console.log("rand",Math.random()*this.nbrPlayers);
    
return random;
  }
  
  
  
  playerHas(tabPlayer){
    
    let a,b,c,d;
    let count=0;
    
  // index  1 de 0 à 4 , 2  de 5 à 9 , 
    switch(tabPlayer.length){
      
      case 5:a=tabPlayer.splice(0,5);
       this.playerGetCards=a;
      // console.log("888",this.playerGetCards)
        break;
        case 10:
        //  console.log(tabPlayer)
          
          
          a=tabPlayer.splice(0,5);
        b=tabPlayer.splice(0,5);
        
          
          console.log("tableau a", a);
          console.log("tableau b",b);
          
        break;
        case 15:
a = tabPlayer.splice(0, 5);
b = tabPlayer.splice(0, 5);
c = tabPlayer.splice(0 ,5);
          
    console.log("3 tab",a + b + c);
        break;
      case 20: 
      a = tabPlayer.splice(0, 5);
b = tabPlayer.splice(0, 5);
c = tabPlayer.splice(0 ,5);
d = tabPlayer.splice(0 ,5);


    }
    
    
  }
  
  
  
  
  
  
  
}





