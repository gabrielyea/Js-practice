// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    
    let allPossibleSquares = [];
    
    for(let i = 0; i < 8; i++){
        allPossibleSquares.push(generateVariation(i))
    }
    
    console.log(allPossibleSquares);
    
}

//uso este como seed para generar todos
function getMagicSquare(){
    let newMS = [[6, 1, 8],[7, 5, 3],[2, 9, 4]];
    return newMS;
}

//genera variaciones a partir de la seed
function generateVariation(num){
    
    let array = getMagicSquare();
    
    
    const transpose = arr => {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < i; j++) {
                const tmp = arr[i][j];
                arr[i][j] = arr[j][i];
                arr[j][i] = tmp;
            };
        }
        return arr;
    }
    
    const reverse = matrix => matrix.map(row => row.reverse())
    
    
    for(let i = 0; i < num; i++){
        if(i < 3){
             reverse(transpose(array));
        }
        else if(i === 3){ //despues de cuatro se repiten, necesito el espejo
            reverse(array); //no se me ocurrio otra forma de separar la parte espejo
        }       
        else if(i > 3){
             reverse(transpose(array));
        }
    }
    
    return array;
}
