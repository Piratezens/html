const changers=document.querySelectorAll(".changer")
console.log(changers[1].id)
for(const changer of changers){
changer.addEventListener("click",()=>{
    document.body.style.backgroundColor=`${changer.id}`
     clearInterval(timerId);

})
}

const timerId = setInterval(() => {
  const index = Math.floor(Math.random() * changers.length);
  document.body.style.backgroundColor = changers[index].id;
}, 100);