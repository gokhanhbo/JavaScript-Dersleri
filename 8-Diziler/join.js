//join() => array elemanlarını birleştirerek tek bir string haline getirir.
//istenilen karakter ile birleştirme yapılabilir.

//tostring() => string haline getirmek istersek..

var cars = ["Mercedes","Bmw","Honda","Toyota"]

document.write(cars.join()+"<br>");
document.write(cars.join("-")+"<br>");
document.write(cars.join("%")+"<br>");
document.write(cars.join(";")+"<br>");

document.write(cars.toString());