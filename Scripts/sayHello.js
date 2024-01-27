let sayInput = document.getElementById("sayInput");
let sayAns = document.getElementById("sayAns");
let sayBtn = document.getElementById("sayBtn");


const sayHelloApi = async (name) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/SayHello/Helloing/${name}`)
    const data = await promise.text();
    return data;
}

sayBtn.addEventListener('click', async ()=>{
    let sayingHi = await sayHelloApi(sayInput.value)
    sayAns.textContent = sayingHi;
})