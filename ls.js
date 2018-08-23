const fs = require('fs');

fs.readdir('/Users/donovanadams/Desktop/GitHub/', (err,files) =>{
  if(err){
    console.log(err);
  }
  console.log(files)
})
