const fs = require('fs');
const chalk = require('chalk');

// Lesson 3.10, 4.23
const getNotes = () => {
    console.log(chalk.blueBright('Notes:'));
    let notes = loadNotes();
    if (notes.length === 0) {
        console.log(chalk.red('You have no notes!'));
    } else {
        notes.forEach((note)=> {
            console.log(chalk.magentaBright(note.title));
        })
    }
};

// Lesson 4.24
const getNote = (title) => {
    let notes = loadNotes();
    if (notes.length === 0) {
        console.log(chalk.red('You have no notes!'));
    } else {
        let note = notes.find((note) => note.title === title);
        if (note) {
            console.log(chalk.blueBright('Note title "' + note.title + '"'));
            console.log(chalk.magentaBright('Note body "' + note.body + '"'));
        } else {
            console.log(chalk.red('Notes titled "' + title + '" does not exist.'));
        }
    }
};

// Lesson 4.19 + 4.20
const addNote = (title, body) => {
    let notes = loadNotes();
    if (notes.length === 0) {
        notes = [];
    }
    let duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('New note added!'));
    } else {
        console.log(chalk.red('Note title "' + title + '" is already taken!'));
    }
};

const removeNote = (title) => {
    let notes = loadNotes();
    if (notes.length === 0) {
        console.log(chalk.yellow('There are currently no notes to remove ... '));
        return;
    }
    let newNotes = notes.filter((note)=> {
        return note.title !== title;
    });
    if (newNotes.length === notes.length) {
        console.log(chalk.red('Notes titled "' + title + '" does not exist. Nothing removed.'));
    } else {
        saveNotes(newNotes);
        console.log(chalk.green('Note "' + title + '"removed.'));
    }
};


const saveNotes = (notes) => {
    let dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        let dataBuffer = fs.readFileSync('notes.json');
        let dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    };
};

 module.exports = {
     getNotes: getNotes,
     getNote: getNote,
     addNote: addNote,
     removeNote: removeNote
 };