console.log("WELCOME TO MY TIC-TAC-TOE.")

let turnmusic = new Audio("./images/ting.mp3")
let gameover = new Audio("./images/yay.mp3")
let gameover2 = new Audio("./images/gameover.mp3");
let isgameover = false; 

let turn = "X";

let count = 0;

// FUNC TO CHANGE TURN

const chngTurn = ()=>{
    return turn === "X"?"0":"X";
}

// FUNC TO CHECK FOR WIN


const chckwin=()=>{

    let boxtexts = document.getElementsByClassName('boxtext');
    
    let wins = [
        [0,1,2, 5, 5 ,0],
        [3,4,5, 5, 15, 0],
        [6,7,8, 5, 25, 0],
        [0,3,6 ,-5, 15, 90],
        [1,4,7,5, 15, 90],
        [2,5,8,15, 15, 90],
        [0,4,8,5, 15, 45],
        [2,4,6,5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&& (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!=='')){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText + " Won";
            isgameover=true;
            
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";

            document.querySelector(".line").style.width="20vw";
            document.querySelector(".line").style.transform=`translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;

            gameover.play();
        } 
    })

}

function restartgame(){
    count=0;
    let playa=document.getElementById('restart');
    playa.style.display="block";

    restart.addEventListener('click' , ()=>{    
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(elemnt=>{
        elemnt.innerText="";
    })

    turn = "X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Start " ;
    
    if(document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width === "200px"){
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    }
    
    document.querySelector(".line").style.width="0";
    if(playa.style.display=="block"){
        playa.style.display="none";
    }
    document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width = "0";

});
}


// MAIN GAME LOGIC
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(index =>{
    let boxtext = index.querySelector('.boxtext');
    index.addEventListener('click' , ()=>{
        if(boxtext.innerText===''){
            boxtext.innerText= turn;
            turn = chngTurn();
            turnmusic.play();
            chckwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="Turn For " + turn;
                if(count==8){
                    gameover2.play();

                    document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width = "500px";

                    restartgame();
                }
                else{
                    count++;
                }
            }
            else{  // FOR PLAY AGAIN AFTER completion
                count=0;

                gameover.play();
                
                restartgame();
            }

        }

    })
    
})





// FOR RESETING ALL..

reset.addEventListener('click' , ()=>{    
    count=0;
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(elemnt=>{
        elemnt.innerText="";
    })

    turn = "X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Start " ;
    
    if(document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width === "200px"){
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    }
    
    document.querySelector(".line").style.width="0";
    let p = document.getElementById('restart');
    p.style.display='none';
    document.querySelector('.imgbox2').getElementsByTagName('img')[0].style.width = "0";
});

