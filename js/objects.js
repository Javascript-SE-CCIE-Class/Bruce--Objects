let food = {
    name: 'ugali',
    color: 'white',
    src: 'maize',
    cost: '50',
    hotel: {
        name: 'Bangla',
        locale: 'Ronga'
    },
    details: function () {
        return `${this.hotel.name} in ${this.hotel.locale} has  the best ${this.name} and its ${this.color} plus its original ${this.src} at only ${this.cost} BOOB!!`; 
    }
}
// console.log(food);
// console.log(food.src);
// food.taste = 'hot';
// console.log(food);
// console.log(food.taste);

// let mokimo = food;
// mokimo.size = 'large';
// console.log(food);

// let corn = mokimo;
// corn.utensil = 'none';
// console.log(food);

// let sembe = Object.assign({},food);
// sembe.time = 4;
// console.log(food);
// console.log(sembe);
// clear();

console.log(food.details());
function triangle(base, height) {
    this.base = base;
    this.height = height;
    this.area = function () {
        return 0.5 * base * height;
    };
};
let theLab = new triangle(50, 8);
console.log(new triangle(50,8).area());


