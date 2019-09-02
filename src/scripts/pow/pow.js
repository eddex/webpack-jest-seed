function pow(num, power) {
    let result = num;
    for (let i = 1; i < power; i++) {
        result = result * num;
    }
    return result;
}

module.exports = pow;