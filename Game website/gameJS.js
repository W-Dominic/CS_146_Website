function revealText(eleID){
    var Text = document.getElementById(eleID);
    if(Text.style.display === 'list-item'){
        Text.style.display = 'none';

    }
    else{
        Text.style.display = 'list-item';
    }
        
    }
