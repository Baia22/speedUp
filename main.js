let speed1=document.querySelector(".speed")
let input1=document.querySelector(".inp")
let h2=document.querySelector("h2")
let str="My Name Is Baia"
let index=1
let speed=300/input1.value

start()
function start() {
    h2.innerHTML=str.substring(0, index)
    index++
    if(index>str.length) {
        index=1
    }
    setTimeout(start, speed)
}

speed1.addEventListener("input", function(e) {
    speed=300/e.target.value
})