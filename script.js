let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msgcon = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO = true;
let count = 1;

let winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]   
];

const enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const resetbut = () => {
    turnO=true;
    enablebox();
    msgcon.classList.add("hide");
    count=0;
};
 
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnO){
            box.innerText="X";
            turnO=false;
        }else{
            box.innerText="O";
            turnO=true;
        }
        count=count+1;
        box.disabled=true;
        checkwin();
    })
});

const showwin=(winner)=>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgcon.classList.remove("hide");
};

const showdraw=()=>{
    msg.innerText="It is a DRAW";
    msgcon.classList.remove("hide");
};

const disablebox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const checkwin = ()=>{
    for(let p of winpat){
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;
        
    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1===pos2 && pos2===pos3){
            disablebox();
            showwin(pos1);
        }else if(count===9){
            showdraw();
        }
    }
    }
};

reset.addEventListener("click",resetbut);
newgame.addEventListener("click",resetbut);