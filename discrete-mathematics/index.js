var A = [1, 2, 3, 4];
var r1 = [
    [1, 1],
    [1, 2],
    [2, 2],
    [2, 3],
    [3, 3],
    [4, 4]
];
function isReflexive(n, m) {
    var result;
    for (var i = 0; i < n.length; i++) {
        for (var j = 0; j < m.length; j++) {
            if (m[j][0] === n[i] && m[j][1] === n[i]) {
                result = true;
                break;
            }
            result = false;
        }
        if (result === false) {
            break;
        }
    }
    return result;
}
console.log('\nIs set R1 ={(1,1),(1,2),(2,2),(2,3),(3,3),(4,4)} reflexive of set A = {1,2,3,4}? : \n' + isReflexive(A, r1));
