// You should implement your task here.
module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length == 0) return [];
    for (let i = 1; i < matrix.length; i += 2) {
        matrix[i].reverse();
    }

    return matrix.flat();
};
