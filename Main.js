import {Cartes} from './Cartes.js'
import {Dialogue} from './Dialogue.js';
import {Players} from './Players.js';
import {Game} from './Game.js';


class Main{
  
  constructor(){
this.createCarte1=new Cartes(["0","1","2","3","4","5","6","7","8","9","🔃","🚫","+1"],["red","blue","green","yellow"],["+2","+2","🎨","🎨"]);



this.dialogue=new Dialogue();

    
    //check si il y a un double dans le tableau qui genere des index
this.createCarte1.toCheckDuplicate();
  
  //melange les index 
    this.createCarte1.toBlendIndex();
   
   
   
  // insert le nbr de joueur et le tableau des participants 
    this.players=new Players(this.dialogue.createDial(),this.dialogue.howManyPlayers);
 
 
 //prepare la distribution par 5 carte pour le nb de joueurs en 1 tab
    this.createCarte1.toPrepareDistrib(this.dialogue.howManyPlayers);
   
   //affiche le nom du joueur en cours
   this.dialogue.dialogueTours(this.players.turnChoices());
  
    
    //passe tableaux de carte joueur et de la partie adverse (computer)
    this.players.playerHas(this.createCarte1.cardDistribPlayer, this.createCarte1.cardForComputer);
    
    this.dialogue.dialogueCard(this.players.playerGetCards, this.players.playerComputerGetCards);
   
   
   //initialise le jeux
   this.game=new Game(this.createCarte1.centerCard);
   this.game.throwInCenter();
 this.createCarte1.initEventClick();
 
 
 //ecrit le nb de cartes
 
this.createCarte1.clickOnPack.addEventListener("click",() => {
  
  
  
 this.dialogue.dialogueCardsPack(this.createCarte1.displayNbCardsPack());
   
}); 
    
  }




  
  
  
  


  
}

let main=new Main();



