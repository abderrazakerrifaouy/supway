const player = document.getElementById("player");
const block = document.getElementById("block");
const score = document.getElementById("scor");
let scor = 0;

function moveLeft() {
    const curLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if (curLeft <= 0) return;
    const newLeft = curLeft - 100;
    player.style.left = newLeft + "px";

}
function moveRight() {
    const curLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if (curLeft >= 200) return;
    const newLeft = curLeft + 100;
    player.style.left = newLeft + "px";
}

document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowLeft") moveLeft();
    else if (event.key == "ArrowRight") moveRight();
})

block.addEventListener("animationiteration", () => {
    const randPos = Math.floor((Math.random() * 3)) * 100;
    block.style.left = randPos + "px";
    scor++;
})

setInterval(()=>{
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    let blockrLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blockrTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

    if(playerLeft == blockrLeft && blockrTop < 480 && blockrTop > 310){
    //   alert(`gem over !!!! \n scour = ${scor}`); 
        blockrTop = 0 ;
        scor = 0 ; 
    }
    score.innerHTML = `scor = ${scor}`
})

