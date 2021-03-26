function timeConversion(s) {
    let tempTime = s.replace(/[A-Z]+/,"").split(":");
    let timeIn24;
    let hour = parseInt(tempTime[0]);
    
        if (s.includes("AM")){
            if(hour === 12){
                tempTime[0] = "00";
            }     
        }

        if(s.includes("PM")){
            if(hour != 12){
                tempTime[0] = hour + 12;
            }       
        }
        
        timeIn24 = tempTime.join(":");
        return timeIn24;

}
