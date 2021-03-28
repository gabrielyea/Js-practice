function migratoryBirds(arr) {
    
    let allBirds = []; //store all birds with no duplicates
    
    //if bird is on list returns true and adds to that bird frequency
    let isBirdOnList = (id) => allBirds.find(bird => {
        if(bird.id == id){
            bird.addSighting()
            return true;
        }
        return false;
    });
    
    arr.forEach(birdId => {
        if(!isBirdOnList(birdId)){ //if bird is not on list push it in
            let bird = new Bird(birdId);
            bird.addSighting();
            allBirds.push(bird);
        }   
    })
    
    allBirds.sort(birdSort) //sort birds by frequency then by id
    
    console.log(allBirds);
    
    return allBirds[0].id //the bird at the top of the list it the correct one
}

function Bird(id){
    this.id = id;
    this.frequency = 0;
    
    this.addSighting = () => this.frequency++;
}

function birdSort(bird1, bird2){
    
    if(bird1.frequency != bird2.frequency)
        return bird2.frequency - bird1.frequency;
    
    return bird1.id - bird2.id;
    
}
