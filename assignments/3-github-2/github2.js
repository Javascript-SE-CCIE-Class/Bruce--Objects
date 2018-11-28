//Number 1
console.log("Number 1\n=====================");
let student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};
console.log(student);   
delete student.rollno;
console.log(student);   
console.log('\n\n');

//Number 2
let myPenguin = {
    character: 'Whiteblack',
    origin: 'Whiteblack the Penguin Sees the World',
    author: 'H.A.Rey and Margret Rey',
    notes: "Children's book about a travelling penguin",
    greeter(){
       console.log(`Hello, I'm a penguin and my name is ${this.character}`);
    }
}
myPenguin.greeter();