// Your code here

const dodger = document.getElementById('dodger')
dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = '100px';

const leftNumbers = dodger.style.left.replace('px','');
const left = parseInt(leftNumbers,10);

function moveDodgerLeft(){
    if (left>0){
        dodger.style.left = `${left-3}px`;
    }
}

document.addEventListener('keydown',function(event){
    if(event.key === 'ArrowLeft'){
        moveDodgerLeft()
    }
})

function moveDodgerRight(){
    if(left < 400){
        dodger.style.left = `${left+1}px`
    }
}

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowRight'){
        moveDodgerRight()
    }
})