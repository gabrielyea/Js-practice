function kangaroo(x1, v1, x2, v2) {  
    let kan1Start = x1;
    let kan2Start = x2;
    
    let dist = (x, y) => Math.abs(x - y);
    let startDist = dist(x1, x2)
    let currentDist;

    while(currentDist != 0){   
        kan1Start += v1;
        kan2Start += v2;
     
        currentDist = dist(kan1Start, kan2Start)
 
        if(currentDist > startDist || currentDist === startDist){        
            return "NO";
        }
    }
    return "YES";
}
