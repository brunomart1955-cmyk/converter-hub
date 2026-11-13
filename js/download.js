/*
====================================
DOWNLOAD
====================================
*/

function initializeDownload(){

    const button=document.getElementById("downloadButton");

    if(!button) return;

    button.addEventListener("click",()=>{

        showToast("Em breve o download real.","success");

    });

}