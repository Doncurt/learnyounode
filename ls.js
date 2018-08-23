const fs = require('fs');

exports.get_files = () => {
  fs.readdir('/Users/donovanadams/Desktop/GitHub/', (err,files) =>{
  if(err){
    console.log(err);
  }
  console.log(files)
})
}
