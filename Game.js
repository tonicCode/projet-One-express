
export class Game{
  
  
  constructor(cardOnCenter,cardPlayer){
    
    this.cardOnCenter=cardOnCenter;
    this.cardPlayer=cardPlayer
    
    
    
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
  
if(element == this.cardOnCenter){

console.log("l index est : " , element);

}



});



}

  
  
  
  
  
}




