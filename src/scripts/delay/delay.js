function delay(time, message) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(message), time);
    });
}

module.exports = delay;