function goTo(page,url){
    if(confirm("Sayfasından çıkılacak "+page+" sayfasına gidilecek. Onaylıyor musunuz?")){
        setTimeout(function(){
            window.location.href = url;
        },1000)
    }else{
        alert("Sayfada Kalındı.")
    }
}