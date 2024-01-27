let randRest = document.getElementById("randRest");
let mexBtn = document.getElementById("mexBtn");
let fastBtn = document.getElementById("fastBtn");
let susBtn = document.getElementById("susBtn");

const mexButtonApi = async () => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/RestaurantPicker/Mexican`)
    const data = await promise.text();
    return data;
}

mexBtn.addEventListener('click', async ()=>{
    let mexIcan = await mexButtonApi()
    randRest.textContent = mexIcan;
})

const fastButtonApi = async () => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/RestaurantPicker/FastFood`)
    const data = await promise.text();
    return data;
}

fastBtn.addEventListener('click', async ()=>{
    let FastFooie = await fastButtonApi()
    randRest.textContent = FastFooie;
})

const sushiApi = async () => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/RestaurantPicker/Sushi`)
    const data = await promise.text();
    return data;
}

susBtn.addEventListener('click', async ()=>{
    let sushing = await sushiApi()
    randRest.textContent = sushing;
})