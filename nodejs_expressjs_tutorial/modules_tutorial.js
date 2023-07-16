/* Node js Key Notes 

what is node js ?
-----------------
-> node js is the runtime environment of javascript to run outside browser.
-> use to maske apis  



Modules in Node js 
-------------------
every file in js is called as module 
need to export (common js export is used)



ex:-
---

function sum(a,b){
    return a+b
}

exports.sum=sum;

or 

exports.sum=(a,b)=>{
    return a+b;
}

const lib=require('./location') // the module is imported in lib
console.log(lib.sum(1,3));


*/

/*

ES modules are also used ->
--------------------------

const sum=(a,b)=>{
    return a+b
}
export{sum} //short hand notation
// need typr= module in package.json
import {sum} from './location.js'


core modules
------------

FS module->

*/
const fs=require('fs');
//we should not use this method to read because it block the server 
//const txt=fs.readFileSync('demo.txt','utf-8')
//console.log(txt);


// fs.readFile('demo.txt','utf-8',(txt)=>{
//     console.log(txt);
// })

// it gives null as it is second output of callback

fs.readFile('demo.txt','utf-8',(err,txt)=>{
    console.log(txt);
})
//server is not blocked here
//node js is alwasy async no sync work can be done here




















