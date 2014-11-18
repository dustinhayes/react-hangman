var keyprop = function keyprop(arr) {
    return arr.reduce(function (prev, curr) {
        return (prev[curr] = curr, prev);
    }, {});
};

module.exports = keyprop;
