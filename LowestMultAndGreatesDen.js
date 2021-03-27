function getTotalX(a, b) {

    let mult = mincm(a);
    let maxD = maxcd(b);
    let cont = 0;
    let multiplier = 1;
    let currentMult = mult;
    
    if(mult === 0){
        return 0;
    }
    
    while(currentMult <= maxD){
        if(isEvenlyDivisible(maxD, currentMult)){
            cont++;
            console.log(cont);
        }
        multiplier++;
        currentMult = mult * multiplier;       
    }
    return cont;
}

function maxcd(b){
    
    let minValue = (Math.min(...b))
    while(minValue > 0){
        if(b.every(x => isEvenlyDivisible(x, minValue))){
            console.log("found! max", minValue)
            return minValue;
        }
        minValue--;
    }
    return minValue;
}

function mincm(a){

    let maxMult = a.reduce((accu, current) => accu * current)
    let minMult = 1;
    
        while(minMult <= maxMult){
        if(a.every(x => isEvenlyDivisible(minMult, x))){
            console.log("found! ", minMult)
            return minMult;
        }
        if(minMult > 100){ //trampa 
            return 0
        }

        minMult++;
    }
    return maxMult;
}

function isEvenlyDivisible(a, b){
    return a % b === 0;
}
