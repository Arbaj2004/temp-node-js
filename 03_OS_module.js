const os=require('os');


// https://nodejs.org/api/os.html

//userInfo
console.log(os.userInfo());

//system uptime in seconds
console.log(`uptime is ${os.uptime}`);

//info of os
const name={
    n:os.type(),
    m:os.release(),
    o:os.totalmem(),
    p:os.freemem()

}
console.log(name);
