const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Caleb Trachte. ');

// Challenge Code:
try {
    fs.appendFileSync('notes.txt', 'We appended this text!');
    console.log('The "text to append" was appended to file!');
  } catch (err) {
    /* Handle the error */
    console.log('The "text to append" was not appended to file!' + err.text);
  }