const path = require('path');
const fs = require('fs');
const {stdin, stdout} = process;

const filePath = path.join(__dirname, 'secret-folder');

fs.readdir(filePath, {withFileTypes: true}, (error, files) => {

    if(error) console.error(error.message);
    
    files.forEach(file => {
        
        if(file.isFile()) {
        
        const fileName = path.join(filePath, file.name);
        const fileInfo = file.name.split('.');

        fs.stat(fileName, (error, stats) => {
               
            if(error) console.error(error.message);
                   
            console.log(`${fileInfo[0]} - ${fileInfo[1]} - ${stats.size}b`);
                    
        })
       }            
    })
});