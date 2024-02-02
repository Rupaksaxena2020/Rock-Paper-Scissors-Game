let userscore = 0;
let compscore = 0;

const choises = document.querySelectorAll(".choise");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoise = ()=>
{
    const options = ["rock","paper","scissors"];
   const randix =  Math.floor(Math.random() * 3);
   return options[randix];

};

const drawgame = () =>{
    msg.innerText = "game is draw";
    msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin, userchoise, compchoise) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! your ${userchoise} beats ${compchoise}`;
        msg.style.backgroundColor = "green";
    }else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you loose! ${compchoise} beats your ${userchoise}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoise)=>{
    const compchoise = gencompchoise();

    if(userchoise==compchoise){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoise=="rock"){
            userwin = compchoise=="paper"? false:true;
        }
        else if(userchoise=="paper"){
            userwin = compchoise == "scissors"?false:true;
        }
        else {
            userwin = compchoise=="rock"?false:true;
        }
        showwinner(userwin,userchoise, compchoise);
    }

};

choises.forEach((choise)=>{
    choise.addEventListener("click",()=>{
        const userchoise = choise.getAttribute("id");
        playgame(userchoise);
    });
});



