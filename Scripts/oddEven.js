let oddEven = document.getElementById("oddEven"); //answer
let oddBtn = document.getElementById("oddBtn"); //ready
let oddInput = document.getElementById("oddInput"); //input

const oddingApi = async (num1) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/OddEven/OddEvening/${num1}`)
    const data = await promise.text();
    return data;
}

oddBtn.addEventListener('click', async ()=>{
    let oddEvener = await oddingApi(oddInput.value)
    oddEven.textContent = oddEvener;
})