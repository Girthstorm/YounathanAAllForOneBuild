let ballInp = document.getElementById("ballInp");
let ballAns = document.getElementById("ballAns");
let ballBtn = document.getElementById("ballBtn");

const magicBallin = async (question) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/Magic8Ball/Ballin/${question}`)
    const data = await promise.text();
    return data;
}

ballBtn.addEventListener('click', async ()=>{
    let ballin = await magicBallin(ballInp.value)
    ballAns.textContent = ballin;
})