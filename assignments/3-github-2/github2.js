//Number 1
console.log("Number 1\n=====================");
let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(student);
delete student.rollno;
console.log(student);
console.log('\n\n');

//Number 2
console.log("Number 2-11\n=====================");
let myPenguin = {
    character: 'Whiteblack',
    origin: 'Whiteblack the Penguin Sees the World',
    author: 'H.A.Rey and Margret Rey',
    notes: "Children's book about a travelling penguin",
    greeter() {
        console.log(`Hello, I'm a penguin and my name is ${this.character}`);
    },
    fly() {
        console.log(this.canfly ? "I can fly" : "I can't fly");

    }
}
//Number 3
myPenguin.greeter();

//Number 4
myPenguin.canfly = false;
myPenguin.fly();
console.log(myPenguin.canfly);//true

//Number 5
myPenguin.chirp = function () {
    console.log("CHIRP CHIRP! Is this what penguins sound like?");
}

//Number 7
myPenguin.greeter();

//Number 8
myPenguin.character = "Penguin McPenguinFace";
myPenguin.greeter();

//Number 9-10
myPenguin.fly();
myPenguin.canfly = true;
myPenguin.fly();
