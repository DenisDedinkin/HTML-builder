const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(filePath, 'utf8');


let fullData = '';
readStream.on('data', chunk => 
    fullData += chunk
);

readStream.on('start', (message) => 
console.log(message)
);

readStream.on('end', () => {
  console.log(fullData);
  console.log('End');
});

readStream.on('error', error => 
console.error(error.message)
);

readStream.emit('start', 'Start');