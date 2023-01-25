module.exports = function towelSort(matrix) {
    let result = [];

    if (!matrix) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                matrix[i].forEach((elem) => {
                    result.push(elem);
                });
            } else {
                matrix[i].reverse().forEach((elem) => {
                    result.push(elem);
                });
            }
        }
    }
    return result;
};
