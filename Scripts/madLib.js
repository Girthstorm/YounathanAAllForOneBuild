let libName = document.getElementById("libName");
let libVil = document.getElementById("libVil");
let libFruit = document.getElementById("libFruit");
let libCrew = document.getElementById("libCrew");
let libIsland = document.getElementById("libIsland");
let libQuirk = document.getElementById("libQuirk");
let libIsland2 = document.getElementById("libIsland2");
let libShip = document.getElementById("libShip");
let libBount = document.getElementById("libBount");
let libCatch = document.getElementById("libCatch");
let libAnswer = document.getElementById("libAnswer");
let questBtn = document.getElementById("questBtn");

const madLib = async (name, villian, devilFruit,crewMate,islandName,trait,islandName2,shipName,bountyAmount,catchphrase) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/MadLib/Libbing/${name}/${villian}/${devilFruit}/${crewMate}/${islandName}/${trait}/${islandName2}/${shipName}/${bountyAmount}/${catchphrase}`)
    const data = await promise.text();
    return data;
}

questBtn.addEventListener('click', async ()=>{
    let libbing = await madLib(libName.value, libVil.value, libFruit.value, libCrew.value,libIsland.value, libQuirk.value,libIsland2.value, libShip.value,libBount.value, libCatch.value)
    libAnswer.textContent = libbing;
})