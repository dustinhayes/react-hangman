var keyprop = (arr) => {
    return arr.reduce((prev, curr) => {
        return (prev[curr] = curr, prev);
    }, {});
};

module.exports = keyprop;
