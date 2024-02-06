const path=require('path');
// console.log(path);
console.log(path.sep);

const filePath=path.join('/content','text.txt');
console.log(filePath);
console.log(path.basename(filePath));


//resolve gives an absolute path tof the file in the computer memory with all directories
const abs=path.resolve(__dirname,'/content','text.txt')
console.log(abs);

const absolutePath = path.resolve('path/to/04_path.js');
const absolutePath1 = path.resolve('path/to/text.txt');
console.log(absolutePath);
console.log(absolutePath1);



