/*
==============================================
Converter Hub
upload.js
==============================================
*/

let selectedFile = null;

const MAX_FILE_SIZE = 100 * 1024 * 1024;

const ACCEPTED_TYPES = [

".pdf",
".png",
".jpg",
".jpeg",
".webp",
".gif",
".bmp",
".svg",
".tiff",
".heic",
".doc",
".docx",
".xls",
".xlsx",
".ppt",
".pptx",
".txt",
".rtf",
".odt"

];

function initializeUpload(){

    const input =
        document.getElementById("fileInput");

    const button =
        document.getElementById("selectFile");

    const zone =
        document.getElementById("dropZone");

    const remove =
        document.getElementById("removeFile");

    button.onclick=()=>input.click();

    input.onchange=e=>{

        if(e.target.files.length){

            processFile(e.target.files[0]);

        }

    }

    remove.onclick=removeSelectedFile;

    zone.addEventListener("dragover",dragOver);

    zone.addEventListener("dragleave",dragLeave);

    zone.addEventListener("drop",dropFile);

}