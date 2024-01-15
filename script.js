document.addEventListener('keydown',(e)=>{
    const keyname = document.querySelector("#key");
    const keyvalue = document.querySelector("#value");

    keyname.innerHTML = `You Pressed <span class="pressed-key">${e.key}</span>`
    keyvalue.innerHTML = e.keyCode;
    keyvalue.classList.add('valueJs');
});