import * as fs from 'node:fs';

function getContent(path) {
  return fs.readdirSync(path)
}
const contents = getContent(".")
console.log(contents)

