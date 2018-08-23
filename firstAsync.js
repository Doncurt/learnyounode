const fs = require('fs');
fs.readFile('/Users/donovanadams/Desktop/GitHub/learnyounode/gravity.txt',(err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
