function breakingRecords(scores) {
    
    let scoreRecords = {
        hiScore:null,
        loScore:null,
        hiRecordBroke:0,
        loRecordBroke:0
    }
    
    scores.forEach((score) => updateScoreRecords(scoreRecords, score));
       
    return [scoreRecords.hiRecordBroke, scoreRecords.loRecordBroke];
    


}

function updateScoreRecords(scoreRecords, scoreEntry){
    
    Object.keys(scoreRecords).forEach((key) => {
        if(scoreRecords[key] !== null){
            if(scoreEntry > scoreRecords.hiScore){
                scoreRecords.hiScore = scoreEntry;
                scoreRecords.hiRecordBroke++;
            }
            else if(scoreEntry < scoreRecords.loScore){
                scoreRecords.loScore = scoreEntry;
                scoreRecords.loRecordBroke++;
            }
        }
        else{
            scoreRecords[key] = scoreEntry;
        }
    })   
}
