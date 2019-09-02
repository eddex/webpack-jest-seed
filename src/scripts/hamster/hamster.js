let hamster = {
    eat(food) {
		if (!this.hasOwnProperty(this.stomach)) {
			this.stomach = [];
		}
		this.stomach.push(food); 
	}
}; 

module.exports.speedy = { 
	__proto__: hamster 
}; 

module.exports.lazy = { 
	__proto__: hamster 
};