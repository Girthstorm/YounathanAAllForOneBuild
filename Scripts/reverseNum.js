let revNumInput = document.getElementById("revNumInput");
let revNum = document.getElementById("revNum");
let revNBtn = document.getElementById("revNBtn");

const revNumApi = async (num1) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/ReverseNum/ReverseNumber/${num1}`)
    const data = await promise.text();
    return data;
}

revNBtn.addEventListener('click', async ()=>{
    let revNuming = await revNumApi(revNumInput.value)
    revNum.textContent = revNuming;
})