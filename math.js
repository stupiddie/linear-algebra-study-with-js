function add(...v) { 
    var sum = [0, 0];

    for (var i = 0; i < v.length; i++) {
       sum[0] += v[i][0];
       sum[1] += v[i][1];
    }

    return sum;
}

function multi(x, n) {
    var result = [x[0] * n, x[1] * n];

    return result;
}

console.log(add([9, 9], [8, 8], [1, 1]));
console.log(multi([3, 3], 3));
