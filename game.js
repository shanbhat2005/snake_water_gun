let naam=prompt("please enter your name: ");
let choice;

do{

    let obj={
        0: "Snake",
        1: "water",
        2: "Gun",
      };
      
    
    
    
    let random=Math.floor(Math.random()*3);
    // console.log(random);
    console.log(obj[random]);
    let answer=prompt(`enter one from S(for snake) W(for water) G(for gun) `);
    // console.log(answer);
    
    
    
    // snake
    if(obj[random]==`Snake`){
      if(answer==`W`|| answer=='w'){
        alert("you lose")
      }
      else if(answer==`G`|| answer=='g'){
        alert("you won")
        
      }
      else if(answer==`S`|| answer=='s'){
        alert("nobody won");
      }
      else{
        alert("wrong input");
      }
      
    }
    
      // water
    else if(obj[random]==`water`){
      if(answer==`S`||answer=='s'){
        alert("you won");
      }
      else if(answer=="G"||answer=='g')
        {
          alert("you lose")
          
        }
      else if(answer==`W` || answer=='w'){
        alert("nobody won")
      }
      else{
        alert("wrong input");
      }
    }
    
      // gun
    
    else if(obj[random]==`Gun`){
      if(answer==`S`|| answer=='s'){
        alert("you lose");
      }
      else if(answer=="G"|| answer=='g')
        {
          alert("nobody won")
    
        }
      else if(answer==`W`|| answer=='w'){
        alert("you won")
      }
      else{
        alert("wrong input");
      }
    }
     choice=prompt("do you want to play again (y/n)");
    if(choice=="y"){
        choice=true;
    }
    else{
        choice=false
    }
    
    
    
}while(choice==true);
alert(`thanku ${naam} for visiting this website created by Mr Shan`);
