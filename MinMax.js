function miniMaxSum(arr) {
    let sums = [];
    for(let i = 0; i < arr.length; i++){
        sums.push(arr.filter((elem, index) => index !== i)
                     .reduce((accu, current) => accu + current));
    }
    console.log(Math.min(...sums), Math.max(...sums));
}
