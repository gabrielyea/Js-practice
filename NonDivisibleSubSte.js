function nonDivisibleSubset(k, s) {
    let freqTable = new Array(k)
    let result = 0;

    //solo lleno mi lista para poder contar las frequencies
    for (let i = 0; i < freqTable.length; i++) {
        freqTable[i] = { nums: "", reminder: i, freq: 0 }

    }

    //cuento las veces que se repite cada reminder
    for (let i = 0; i < s.length; i++) {
        let index = s[i] % k; //los reminders van a ir de 0 a k - 1
        freqTable[index].freq += 1; //le sumo uno al reminder actual
        freqTable[index].nums += s[i] + " "; //por si quiero desplegar los valores los                                                  guardo aqui
    }

    //esto lo descubri a prueba y error, podria poner un if para cambiar de limite 
    //dependiendo si es par o impar la k
    let limit = ((k + 2) / 2) - 1;
    
    console.log(freqTable)
    //comparo los extremos que no se pueden sumar porque serian divisibles entre k, pick        Max
    for (let i = 1; i < limit; i++) {
        // 1) comparo que la suma de los reminders sea k (no es una opcion valida)
        if (freqTable[i].reminder + freqTable[k - i].reminder === k) {
            //2) elijo el valor con mayor frecuencia      
            result += Math.max(freqTable[i].freq, freqTable[k - i].freq);
            console.log("Pick frequency", Math.max(freqTable[i].freq, freqTable[k - i].freq))
        }
    }

    //el valor con residuo 0 solo puede aparecer una vez, si lo sumas dos veces te sera         divisible entre k, pero si se suma con otro valor no 
    if (freqTable[0].freq > 0) {
        result += 1;
    }

    //si k es par el valor de la mitad solo puede aparecer una vez, si se suma dos veces
    //sera divisible entre k
    if (k % 2 === 0) {
        result += 1;
    }


    console.log(result)

    return (result)

}
