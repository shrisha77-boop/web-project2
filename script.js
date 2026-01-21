
let boxes = document.querySelectorAll(".box");
let reset=document.querySelector(".resetbutton");
let newgame=document.querySelector(".newgame");
let winmsg=document.querySelector(".msg");
let messagewin=document.querySelector(".message-after-win");
let count=0;

let trunO=true;
 const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
      if(trunO)  
      {
        box.innerHTML="O";
        box.style.color="black";
        trunO=false;
      }
       else
       {
        box.innerHTML ="X";
        box.style.color="#D83169";
        trunO=true;
       }
       box.disabled=true;
       count++;
       let iswinner= checkWinner();
        if(count===9 && !iswinner)
        {
          draw();
        }
    });
     
});
const draw=()=>
{
  winmsg.innerText=`The Game Is Draw`;
  messagewin.classList.remove("hidden");
}

const disableboxes=()=>
{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enableboxes=()=>
{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showwinner=(winner)=>
{
  winmsg.innerText=`Congratulations winner is ${winner}`;
  messagewin.classList.remove("hidden");
  disableboxes();
}
const checkWinner = () => {
  for (let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
  
  if(pos1Val != "" && pos2Val != "" && pos3Val != "")
  {
    if(pos1Val==pos2Val && pos2Val==pos3Val){
            console.log("winner",pos1Val);
            disableboxes();
            showwinner(pos1Val);
        }
        
  }}
};
reset.addEventListener("click",()=>
{
  trunO=true;
  enableboxes();
  messagewin.classList.add("hidden");
  count=0;
  
});
newgame.addEventListener("click",()=>
{
   trunO=true;
  enableboxes();
  messagewin.classList.add("hidden");
  count=0;
});
