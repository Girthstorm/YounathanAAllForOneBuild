let revWInp = document.getElementById("revWInp");
let revWBtn = document.getElementById("revWBtn");
let revWord = document.getElementById("revWord");

const revWordApi = async (word) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/ReverseWord/Reversing/${word}`)
    const data = await promise.text();
    return data;
}

revWBtn.addEventListener('click', async ()=>{
    let revWording = await revWordApi(revWInp.value)
    revWord.textContent = revWording;
})