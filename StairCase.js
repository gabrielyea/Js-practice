function staircase(n) {

    for(let i = 1; i <= n; i++){
        drawStair(i, n);
    }
    
}

function drawStair(currentStair, totalStairs){
    let stairDraw = "";
    let stair = "#";
    let space = " ";
    let emptySpaces = totalStairs - currentStair;
    
    for(let i = 1; i <= totalStairs; i++){  
        if(i > emptySpaces){
            stairDraw = stairDraw.concat(stair);
        }
        else{
            stairDraw = stairDraw.concat(space);
        }
        
        //stairDraw = stairDraw.concat(stair);
    }
    console.log(stairDraw);
}
