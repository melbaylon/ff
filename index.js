import * as fs from 'node:fs';

const testDir = './test-dir'


function getContent(path) {
  return fs.readdirSync(path)
}
const contents = getContent(".")
console.log(contents)

