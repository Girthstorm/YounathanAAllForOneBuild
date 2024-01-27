let askquest1 = document.getElementById("askquest1");
let askquest2 = document.getElementById("askquest2");
let askQuestAns = document.getElementById("askQuestAns");
let questBtn = document.getElementById("questBtn");

const askQuestApi = async (name, time) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/DosQuestions/Question/${name}/${time}`)
    const data = await promise.text();
    return data;
    
}

questBtn.addEventListener('click', async ()=>{
    let quest = await askQuestApi(askquest1.value, askquest2.value)
    
    console.log(quest);
    askQuestAns.textContent = quest;
})