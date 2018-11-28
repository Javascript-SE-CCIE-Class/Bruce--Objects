let food = {
    name: 'ugali',
    color: 'white',
    sorc: 'maize',
    cost: '50',
    hotel: {
        name: 'Bangla',
        locale: 'Ronga'
    },
    details: function () {
        return `${this.hotel.name} in ${this.hotel.locale} has  the best ${this.name} and its ${this.color} plus its original ${this.sorc} at only ${this.cost} BOOB!!`; 
    },
    edit: function (name,color,src,cost) {
        this.name = name;
        this.color = color;
        this.sorc = src;
        this.cost = cost;
    }
}
console.log(`ORIGINAL: \n : ${food.details()}`);
food.edit('sembe','blue','corn','70');
console.log(`NEW : \n : ${food.details()}`);