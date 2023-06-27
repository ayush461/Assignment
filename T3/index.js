const fs = require('fs');
const path = require('path');

// Array of files to be processed
const filesToProcess = ['file1.txt', 'file2.txt', 'file3.txt'];

// Function to process a single file
function processFile(file) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, file);

    // Simulating file processing by reading the file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Process the file data
        console.log(`Processing ${file}: ${data}`);
        resolve();
      }
    });
  });
}

// Event loop function
async function eventLoop() {
  while (filesToProcess.length > 0) {
    const file = filesToProcess.shift();

    try {
      await processFile(file);
    } catch (err) {
      console.error(`Error processing ${file}: ${err}`);
    }
  }

  console.log('All files processed!');
}

// Start the event loop
console.log("A");
eventLoop();
console.log("v");