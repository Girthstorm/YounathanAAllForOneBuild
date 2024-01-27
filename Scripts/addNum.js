let addAnswer = document.getElementById("addAnswer");
let addNum1 = document.getElementById("addNum1");
let addNum2 = document.getElementById("addNum2");
let questBtn = document.getElementById("questBtn");
// https://younathanaafo.azurewebsites.net/AddNum/Adding/{num1}/{num2}

const addingApi = async (num1, num2) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/AddNum/Adding/${num1}/${num2}`)
    const data = await promise.text();
    return data;
    console.log(data);
}

questBtn.addEventListener('click', async ()=>{
    let num1 = await addingApi(addNum1.value, addNum2.value)
    
    console.log(num1);
    addAnswer.textContent = num1;
})