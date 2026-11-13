/*
=========================================
Pesquisa
=========================================
*/

function initializeSearch(){

    const input=document.getElementById("searchInput");

    if(!input) return;

    input.addEventListener("keyup",searchCards);

}

function searchCards(){

    const text=document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    const cards=document.querySelectorAll(".converter-card");

    cards.forEach(card=>{

        const content=card.innerText.toLowerCase();

        if(content.includes(text)){

            card.style.display="flex";

        }else{

            card.style.display="none";

        }

    });

}
