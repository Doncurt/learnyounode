const fs = require('fs');
const file = fs.readFileSync("/Users/donovanadams/Desktop/GitHub/learnyounode/gravity.txt",encoding='utf8');
console.log(file.split('\n'));
