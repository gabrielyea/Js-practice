function jumpingOnClouds(c) {
    
    let jumpCounter = 0;
    let currentCloud = 0;
    let continueGame = () => currentCloud + 1 < c.length; 
    
    let jump = (n) => {  //<--- dependiendo de el resultado le va a sumar 1 o 2
        currentCloud += n
        jumpCounter++ };

    while(continueGame()){
        canDoubleJump(currentCloud, c, jump);
    }      
    return jumpCounter;
}
//---------------------------------------------------
function canDoubleJump(currentCloud, clouds, jump){  //jump es el callback 
    
    if(clouds[currentCloud + 2] == 1){
        jump(1);
        console.log("Single jump!")
    }
    else{
        jump(2)
        console.log("Double jump")
    }
}
