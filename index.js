import * as fs from 'node:fs';

const testDir = './test-dir'
// listContent()
tree()

// 

function getContent(path) {
  return fs.readdirSync(path)
}


function listContent(rootDir = testDir) {
  const contents = getContent(rootDir)
  contents.forEach((content) => {
      console.log(fs.statSync(
        `./${rootDir}/${content}`
      ))
  });

}


// recursively list contents of a directory
function tree (path) {
  //
}


