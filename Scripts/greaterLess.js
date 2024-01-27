let greaterLess1 = document.getElementById("greaterLess1");
let greaterLess2 = document.getElementById("greaterLess2");
let greaterLessAns = document.getElementById("greaterLessAns");
let questBtn = document.getElementById("questBtn");

const greaterLessApi = async (firstNum, secondNum) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/GreaterLesser/LessGreat/${firstNum}/${secondNum}`)
    const data = await promise.text();
    return data;
}

questBtn.addEventListener('click', async ()=>{
    let lessGreat = await greaterLessApi(greaterLess1.value, greaterLess2.value)
    greaterLessAns.textContent = lessGreat;
})