console.log("Starting notes.js!");

// console.log(module);
module.exports.sex = 25;
module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note';
};

module.exports.add = (num1, num2) => {
    var sum = num1+num2;
    console.log(`The sum is : ${sum}`);
};