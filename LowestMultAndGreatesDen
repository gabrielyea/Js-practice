function getTotalX(a, b) {
    // Write your code here
    console.log(mcm(a));


}

function mcd(b){
    let minValue = (Math.min(...b))
    while(minValue > 0){
        if(b.every(x => isEvenlyDivisible(x, minValue))){
            console.log("found! ", minValue)
            return minValue;
        }
        minValue--;
    }
    return minValue;
}

function mcm(a){
    let maxMult = a.reduce((accu, current) => accu * current)
    let minMult = 1;
    
        while(minMult <= maxMult){
        if(a.every(x => isEvenlyDivisible(minMult, x))){
            console.log("found! ", minMult)
            return minMult;
        }
        minMult++;
    }
    return maxMult;
}

function isEvenlyDivisible(a, b){
    return a % b === 0;
}
