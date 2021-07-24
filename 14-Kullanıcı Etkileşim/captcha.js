function sifreuret(){
    document.getElementById("captcha").value = Math.floor(Math.random()*1000);
}
sifreuret();

function checkCaptcha(){
    var text = document.getElementById("text").value;
    var pass = document.getElementById("captcha").value;
    if(text == pass){
        alert("Parola Doğru");
    } else{
        alert("Parola Hatalı");
    }
    document.getElementById("text").value="";
}

