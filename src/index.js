// You should implement your task here.

// module.exports = function towelSort(matrix) {
//     if (matrix.length == 0) {
//         return [];
//     }
//     let newArr = [];
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             newArr.push(matrix[i][j]);
//         }
//     }
//     newArr.sort(function (fisrt, second) {
//         if (fisrt > second) return 1;
//         if (second > fisrt) return -1;
//         if (second == fisrt) return 0;
//     });
//     console.log(newArr);
//     return newArr;
// };

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length == 0) return [];
    for (let i = 1; i < matrix.length; i += 2) {
        matrix[i].reverse();
    }

    return matrix.flat();
};
