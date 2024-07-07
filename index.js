import * as fs from 'node:fs';

const testDir = './test-dir'

function getContent(path) {
  return fs.readdirSync(path)
}

function listContent(path) {
  const contents = getContent(path)
  contents.forEach((content) => {
      console.log(fs.statSync(
        `./test-dir/${content}`
      ))
  });

 
}

listContent(testDir)

