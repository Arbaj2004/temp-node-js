const secret="SECRET NAME"
const susan="SUSAN"
const john="JOHN"

console.log(module);

//preffered to export
module.exports={susan,john}

//this is another type to export 
module.exports.items=[12,34]
const p={
    name:"bob"
}
module.exports.name=p