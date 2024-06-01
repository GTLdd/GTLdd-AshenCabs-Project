


function hideContent(id, btnId){
    var contentDiv = document.getElementById(id);
    var btn = document.getElementById(btnId);
    

    if(contentDiv.style.display != 'block'){
        contentDiv.style.display = 'block';
        contentDiv.style.transition = '2s';
        btn.style.marginTop = '8px'
        btn.innerHTML = 'Hide';
    }else{
        contentDiv.style.display = 'none';
        btn.style.marginTop = '32px';
        btn.innerHTML = 'More';
        

    }
}


/*function hideContent(id, gridId, outerGridId){
    var contentDiv = document.getElementById(id);
    var grid = document.getElementById(gridId)
    var outerGrid = document.getElementById(outerGridId)
    

    if(contentDiv.style.display != 'flex'){
        contentDiv.style.display = 'flex';
        grid.style.marginTop = '100px';
        outerGrid.style.marginTop = '700px'

    }else{
        contentDiv.style.display = 'none';
        grid.style.marginTop = '0px';
        outerGrid.style.marginTop = '580px'
    }
}*/
