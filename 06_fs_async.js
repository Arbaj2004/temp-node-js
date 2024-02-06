const fsasync=require("fs")

console.log("start");

fsasync.readFile('./content/text.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
    }
    console.log(result);
    const second=result;
    fsasync.readFile('./content/text1.txt','utf8',(err,result)=>{
        const first=result;        
        if(err){
            console.log(err);            
        }
        console.log(result);
    fsasync.writeFile('./content/ans1.txt',`hi this is ${first} ${second}`,(err,result)=>{
        if(err){
            console.log(err);            
        }
        console.log(result);       
    })
})
})
console.log("next task");
