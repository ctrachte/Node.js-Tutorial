const fs = require('fs');
// Lesson 3.10
const getNotes = function () {
    return 'Your notes...';
};


// Lesson 4.19
const addNote = (title, body) => {
    const notes = loadNotes();
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
};

 module.exports = {
     getNotes: getNotes,
     addNote: addNote
 };