/*
====================================
CONVERTER
====================================
*/

function initializeConverter(){

    const button=document.getElementById("convertButton");

    if(!button) return;

    button.addEventListener("click",startConversion);

}

function startConversion(){

    if(!selectedFile){

        showToast("Selecione um arquivo.","error");

        return;

    }

    showLoader();

    const bar=document.getElementById("progressBar");

    let progress=0;

    const interval=setInterval(()=>{

        progress+=5;

        bar.style.width=progress+"%";

        if(progress>=100){

            clearInterval(interval);

            hideLoader();

            showToast("Conversão concluída.","success");

            document
            .getElementById("downloadButton")
            .disabled=false;

        }

    },80);

}