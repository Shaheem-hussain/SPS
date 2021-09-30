let previIframeElement="";
let haveElement=false;

function videoPlay(imageId, iframeId){
    
    if(haveElement){
        previIframeElement.src+="?autoplay=0";
    }
    
    let image=document.querySelector("#"+imageId);
    let iframe=document.querySelector("#"+iframeId);

    image.style.display="none";
    iframe.style.display="block";
    iframe.src+="?autoplay=1";

    previIframeElement=iframe;
    haveElement=true;
}
