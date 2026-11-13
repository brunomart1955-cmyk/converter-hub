/*
====================================
UI.JS
====================================
*/

function initializeUI(){

    hideLoader();

}

function showLoader(){

    document.getElementById("loader").style.display="flex";

}

function hideLoader(){

    document.getElementById("loader").style.display="none";

}

function showToast(message,type="success"){

    const container=document.getElementById("toastContainer");

    const toast=document.createElement("div");

    toast.className="toast "+type;

    toast.innerHTML=message;

    container.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },50);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    },3000);

}