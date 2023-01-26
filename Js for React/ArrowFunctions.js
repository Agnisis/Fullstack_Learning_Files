
//normal function 
export default function DosomeThing(){

}
//arrow function 

export const DosomeThing=()=>{

}


const MyComponent=()=>{
    return <div></div>
}

// onclick fn direct apply to jsx 

<button onclick={()=>{console.log("hello")}}>
</button>



if(true){

}
else{

}

// ternary if else

let age=10;
let name="Agni";

if(age>10) name="agni"
else name="jack"


let nam=age>10 && "agni";
let bois=age>10 ? "agni" : "jack";



const MyComponents=()=>{
    return age>10 ?<div>pedro</div>:<div>Jack</div>;
}



//objects

const tag="hello";
const person={
    //tag:"Agnisis",
    // tag=tag,
    tag,
    umar:20,
    id:123,
    isMarried:false,

};

//const {tag,umar,isMarried}= person;


const person2={...person,name:"jack"};
console.log(person);


//functions of arrays

// .map() .filter() .reduce() 
let names=["agnisis","shilpi","akash","agnisis"];
names.map((name)=>{
    return name+"1";

})


names.filter((names)=>{
    return names!=="agnisis";
})





