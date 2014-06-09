function sqr(ins, outs, config, cb) {
    var n = Number(ins.number.data[0]);
    outs.square.data = [n * n];
    cb(null, outs);
}

function sum(ins, outs, config, cb) {
    var sum=0.0;
    ins.square.data.forEach(function (n) {
        sum += n;
    });
    outs[0].data = [ sum ];
    console.log(sum);
    cb(null, outs);
}

exports.sqr = sqr;
exports.sum = sum;
