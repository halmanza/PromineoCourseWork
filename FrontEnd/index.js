

function removeStyle(e,styleName){
    let target= document.getElementById(e);
    let values= target.children;

    for(let x=0; x < values.length;x++){
        values[x].classList.remove(styleName);
    }
}

paragraphDiv.addEventListener('click',function(e){
   removeStyle('paragraphDiv','truncate-overflow');
})


