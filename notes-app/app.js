const fs = require('fs');
const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');

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

// customize yargs version
// yargs.version('1.1.0')

// Lesson 4.16 and 4.17
// Need the following: add, remove, read, list notes

// add command
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
});

// remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
});

// read command
yargs.command({
    command: 'read',
    describe: 'Read a note.',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.getNote(argv.title);
    }
});

// list command
yargs.command({
    command: 'list',
    describe: 'List all notes.',
    handler: () => {
        notes.getNotes();
    }
});

// show output
yargs.parse();