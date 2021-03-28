function birthday(s, d, m) {

  //if only one chocolate block is present
    if(s.length < 2){
        if(s.includes(d))
            return 1;
            
    return 0;       
    }
    
  
    let allSlices = [];
    let goodSlices = [];
    let checkDaySum = (bar) => (bar.reduce((a, b) => a + b) === d); 

    for (let i = 0; i < s.length - 1; i++){
        allSlices.push(s.slice(i, i + m));  //create chocolate slices of m length
    }
    goodSlices = (allSlices.filter(checkDaySum)); //filter slices that sum == day
    
    return goodSlices.length;
}
