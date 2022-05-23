const path = require('path');
const fs = require('fs');
const readline = require('readline');
const { log } = require('console');

const filePath = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(filePath, 'utf8');

const {stdin, stdout} = process;
const rl = readline.createInterface(stdin, stdout);

console/log('Hello! Enter some text. Use "Ctrl + C" or "exit" for exit \n');


rl.on('line', line => {

  if (line.trim() === 'exit') 
  process.exit();
  writeStream.write(line + '\n');
});

rl.on('SIGINT', () => 
    process.exit()
);
rl.on('error', error => 
    console.error(error.message)
    );