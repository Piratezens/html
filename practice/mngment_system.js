const myNums=[1,2,3,4,5];
const newnums=[];
myNums.forEach((num)=>{
    if(num<=3)
    {
     newnums.push(num);
    }
    
}
);

const realnums=myNums.filter((num)=> num>3);
newnums.push(...realnums);
console.log(newnums);