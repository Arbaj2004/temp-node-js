const fs=require('fs')

// console.log(fs);

//reading a txt file 
// ./content/Text.txt is path of it
console.log("start");
const a=fs.readFileSync('./content/text.txt')
const a1=fs.readFileSync('./content/text.txt','utf8')
console.log(a);
console.log(a1);

//writing in file
fs.writeFileSync('./content/ans.txt',"hi i am arbaj shaikh",{flags:a})
console.log("next task");
