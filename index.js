//document.getElementById("counter").innerText=5
let count = 0
let countEl= document.getElementById("counter");
function increment(){
    count++
    countEl.textContent = count;
}
function save(){
    saveEl= document.getElementById("save-el");
    let savedCount = " " +count + " -";
    saveEl.innerText += savedCount;
    count = 0;
    countEl.textContent = 0;

    console.log(count);
}