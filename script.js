let washCarBtn = document.getElementById("wash-car")
let mowLawnBtn = document.getElementById("mow-lawn")
let pullWeedBtn = document.getElementById("pull-weeds")
let firstRemoveEl = document.getElementById("remove1")
let secondRemoveEl = document.getElementById("remove2")
let thirdRemoveEl = document.getElementById("remove3")
let lowerBtn = document.getElementById("lowbutton")
let sumEl = document.getElementById("totalamountoutput")
let carRowEl = document.getElementById("carrow")
let mowLawnEl = document.getElementById("mowlawnrow")
let pullWeedEl = document.getElementById("pullweedsrow")
let place = document.getElementById("placeholder")
let amountArr = []
let choreArr = []
let sum = 0
let wash = false
let mow = false
let pull = false


washCarBtn.addEventListener("click", function() {
    if (wash === false) {
        choreArr.push("wash car")
        wash = true
        amountArr.push(10)
        sum += 10
        render(choreArr, amountArr)}
        
})


mowLawnBtn.addEventListener("click", function() {
    if (mow === false) {
        choreArr.push("mow lawn")
        mow = true
        amountArr.push(20)
        sum += 20
        render(choreArr, amountArr)}
})

pullWeedBtn.addEventListener("click", function() {
    if (pull === false) {
        choreArr.push("pull weeds")
        pull = true
        amountArr.push(30)
        sum += 30
        render(choreArr, amountArr)}
})


lowerBtn.addEventListener("click", function() {
     amountArr = []
     choreArr = []
     sum = 0
     wash = false
     mow = false
     pull = false
     render(choreArr, amountArr)
})

function render (choreArr, amountArr){
    let placeHolder = ""
    for(i = 0; i < amountArr.length; i++){
        placeHolder += 
        `
            <div class="upperrow">
                 <span class="chore">${choreArr[i]}</span>
                    <span class="remove" id="remove1">remove</span>
                <span class="amount">$${amountArr[i]}</span>
            </div>
        `
    }
    sumEl.textContent = "$" + sum
    place.innerHTML = placeHolder
}