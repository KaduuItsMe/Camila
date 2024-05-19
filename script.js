let counter = 0

document.getElementById('continua').addEventListener('click', function() {
    if (counter !=0){
        document.getElementById('text-'+counter).style.display = "none"
        
    }

    if (counter ==0){
        var audio = document.getElementById("audio");
        audio.play();
        
    }
    counter++
    document.getElementById('text-'+counter).style.display = "block"
    if (counter ==7){
    document.getElementById("continua").style.display="none"     
    document.getElementById("fim").style.display="block" 
    }
    
    

    
    
});

document.getElementById('enviar').addEventListener('click', function() {
    let value= document.getElementById("senha").value
    if(value == "2005"){
        document.getElementById("password").style.display = "none"
        document.getElementById("container").style.display = "block"

    }
});

