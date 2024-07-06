import * as fs from 'node:fs';

const testDir = './test-dir'


function getContent(path) {
  return fs.readdirSync(path)
}

function listContent(path) {
  const contents = getContent(path)

  contents.forEach((content) => {
    if (fs.statSync(content).isDirectory === true) {
      console.log("isDir")
    } else {
      console.log(content)
    }
  });
  
 

  
}

listContent(testDir)
// console.log(contents)

