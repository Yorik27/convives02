let initConvives;
let finalConvives;

function getInitConValue(){
    initConvives = document.getElementById("convives").value;
    let ok1= document.getElementById("ok1");
    ok1.style.visibility = "hidden";
}

function getFinConValue(){
finalConvives = document.getElementById("finConvives").value;
let ok2= document.getElementById("ok2");
    ok2.style.visibility = "hidden";
}

  form.onsubmit = ()=>{
    const li = document.createElement("li");
    const texte = document.createElement("span");
    texte.classList.add("texte");
    texte.textContent = champ.value;

    const nombre = document.createElement("span");
    nombre.classList.add("texte");
    nombre.textContent = champ2.value;
    let nombreValeur = nombre.textContent;

//let titou = (nombreValeur.match(/(\d+)|([a-z])+/gi));
let titou = (nombreValeur.match(/(\d+)|([A-z-à-é-è-ô-.])+/gi));



let unit = titou[1];

if (unit==null){
    unit = "";
 }
let result = titou[0];


let spanCalc = document.createElement('span');
 ul.appendChild(li); 
 spanCalc.classList.add("vert");
 
 let calcul= result/initConvives*finalConvives;
    spanCalc.textContent =  calcul.toFixed(2) + " " + unit;

 //   spanCalc.textContent = result/initConvives*finalConvives + " " + unit;
    
    li.textContent = champ.value + " = " + champ2.value + " => " + spanCalc.textContent;
    champ.value = "";
    champ2.value = "";
    return false;
    
}
const metas = document.getElementsByTagName('meta');
metas[1].content = 'width=device.width, height= ${window.innerHeight} initial-scale=1.0, maximum-scale=5.0, user-scalable';

//___________________________
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}
window.onbeforeinstallprompt = (event) =>{
    event.preventDefault();
    installBtn.classList.add("slide");

    installBtn.onclick = ()=>{
        installBtn.classList.remove("slide");
        setTimeout(()=>  installBtn.style.display= "none", 800);
        event.prompt();
    };
}