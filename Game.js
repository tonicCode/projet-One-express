
export class Game{
  
  
  constructor(cardOnCenter){
    
    this.cardOnCenter=cardOnCenter;
    
    
    
  }
  
  
  throwInCenter(){
    let cardOnCenter=document.getElementById("cardsCenter");
    
    
    cardOnCenter.innerHTML=this.cardOnCenter;
    
    
    
    return this.cardOnCenter;
  }
  
  
  
  
  
  
}




