// Complete the queensAttack function below.
function queensAttack(n, k, r_q, c_q, obstacles) {

    //obstacles = [[5, 5], [4, 2], [2, 3], [2, 5]];
    let queen = {
        x: 0,
        y: 0
    };
    queen.x = r_q;
    queen.y = c_q;

    let total = 0;

    let distances = maxDistance(queen, n)

    console.log(checkObstacles(queen, obstacles, distances))

    console.log(distances)

    for (let i in distances) {
        total += distances[i];
    }
    
    return total
}

//checks for obstacles on valid slopes, chooses the closest one.
function checkObstacles(pos, obstacles, distances) {

    let m;
    let difx;
    let dify;
    obstacles.forEach(obst => {
        difx = (obst[0] - pos.x)
        dify = (obst[1] - pos.y)
        m = (dify / difx)

        console.log("slope", m)
        if (Math.abs(m) === 1) {
            console.log("diagonal")
            if (obst[0] > pos.x && obst[1] > pos.y) {
                if (distances.d1 > Math.abs(difx) - 1) {
                    distances.d1 = Math.abs(difx) - 1
                }
            }
            else if (obst[0] > pos.x && obst[1] < pos.y) {
                if (distances.d2 > Math.abs(difx) - 1) {
                    distances.d2 = Math.abs(difx) - 1
                }
            }
            else if (obst[0] < pos.x && obst[1] < pos.y) {
                if (distances.d3 > Math.abs(difx) - 1) {
                    distances.d3 = Math.abs(difx) - 1
                }
            }
            else if (obst[0] < pos.x && obst[1] > pos.y) {
                if (distances.d4 > Math.abs(difx) - 1) {
                    distances.d4 = Math.abs(difx) - 1
                }
            }           

        }
        else if (Object.is(m, +0)) {
            console.log("horizontal");
            
            if (distances.rigth > Math.abs(difx) - 1) {
                distances.rigth = Math.abs(difx) - 1
            }
        }
        else if (Object.is(m, -0)) {
            console.log("horizontal");
            
            if (distances.left > Math.abs(difx) - 1) {
                distances.left = Math.abs(difx) - 1
            }
        }
        else if (m === Infinity) {
            console.log("vertical");
            
            if (distances.up > Math.abs(dify) - 1) {
                distances.up = Math.abs(dify) - 1
            }
            //distances.up = Math.abs(dify) - 1
        }
        else if (m === -Infinity) {
            console.log("vertical");
            
            if (distances.down > Math.abs(dify) - 1) {
                distances.down = Math.abs(dify) - 1
            }
            //distances.down = Math.abs(dify) - 1
        }
    })
}

//gets max movement amount, returns a map with movement per axis
function maxDistance(queen, n) {
    let directions = {
        up: n - queen.y,
        rigth: n - queen.x,
        down: queen.y - 1,
        left: queen.x - 1,
        d1: Math.min(n - queen.y, n - queen.x),
        d2: Math.min(n - queen.x, queen.y - 1),
        d3: Math.min(queen.y - 1, queen.x - 1),
        d4: Math.min(queen.x - 1, n - queen.y)
    };
    return directions;
}
