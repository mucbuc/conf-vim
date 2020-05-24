#!/usr/bin/env node

const fs = require('fs'),
  homedir = require('os').homedir(),
  path = require('path'),
  bashPath = path.join(homedir, '.bashrc'),
  scriptName = 'marks_bashrc', 
  scriptPath = path.join(__dirname, scriptName);

let bashRC = fs.readFileSync(bashPath, 'utf8');

if (!bashRC.match(scriptName)) {
  console.log( `installing ${scriptPath}` );
  bashRC += `
if [ -f ${scriptPath} ]; then
  . ${scriptPath} 
fi
`;
  fs.writeFileSync(bashPath, bashRC);
} else {
  console.log( `${scriptPath} already installed`);
}
