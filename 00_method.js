const sayHi=((name)=>{
    setInterval(()=>{
        console.log(`hi js ${name}`);
        
    },1000)
})
console.log("<<hi>>");
sayHi("susan")

module.exports={sayHi}
