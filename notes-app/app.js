const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Caleb Trachte. ');

// // Challenge Code:
// try {
//     fs.appendFileSync('notes.txt', 'We appended this text!');
//     console.log('The "text to append" was appended to file!');
//   } catch (err) {
//     /* Handle the error */
//     console.log('The "text to append" was not appended to file!', err);
//   }

//   // lesson 3.10
// const add = require('./utils.js')
// const getNotes = require('./notes.js')
// const name = 'Caleb Trachte'

// const sum = add(2,2)
// // console.log(add)
// // console.log(sum)
// console.log(getNotes)

// // Lesson 3.11
// const validator = require('validator')
// const getNotes = require('./notes.js')
// //prints true
// console.log(validator.isEmail('cetrachte@email.com'))
// // prints false
// console.log(validator.isURL('cetrachte'))

// // Lesson 3.12 Challenge: 
// const chalk = require('chalk');
 
// console.log(chalk.green('Success!'));

//Lesson 4.15
const chalk = require('chalk');
const getNotes = require('./notes.js');
const yargs = require('yargs');

// const greenMsg = chalk.blue.inverse.bold('Success!');
// console.log(greenMsg);
// // returns array of arguments provided.
// console.log(process.argv[2]);

// const command = process.argv[2];

// if (command.toLowerCase() === 'add') {
//     console.log('Adding Note ...');
// } else if (command.toLowerCase() === 'remove'){
//     console.log('Removing Note ...');
// };

console.log(process.argv);
console.log(yargs.argv);