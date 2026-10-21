const randnum=(Math.round(Math.random()*99)+1);
const btn=document.querySelector('#btn');
const chances=document.querySelector('#chances');
btn.addEventListener('click',()=>{
    console.log(randnum);
    let input=Number(document.querySelector('#input').value);
    if(randnum>input)
    {
          chances.style.color="red";

        chances.innerHTML=`enter higher number`;
    }
   else if(randnum<input)
    {
          chances.style.color="red";
      
        chances.innerHTML=`enter lower number`;

    }
    else{
        chances.style.color="green";
        
        chances.innerHTML=`congratulation, you enter the right number and you won`;
    }

    
   const inputfield= document.querySelector('#input')
    inputfield.value = '';
    inputfield.focus();
    
})

