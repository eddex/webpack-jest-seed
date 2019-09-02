module.exports = {

    read: function(...args) {
        args.forEach(element => {
            if (isNaN(element)) {
                throw new TypeError('t e r r i b l e !');
            }
        });
        this.args = args;
    },

    sum: function() {
        let result = 0;
        this.args.forEach(element => {
            result += Number(element);
        });
        return result;
    },

    mul: function() {
        let result = 1;
        this.args.forEach(element => {
            result *= Number(element);
        });
        return result;
    }
};
