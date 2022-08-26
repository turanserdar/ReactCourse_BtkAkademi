for (i = 1; i <= 10; i++) {
  console.log(i);
}


var sehirler=["Ankara","istanbul","izmir","Bursa"]

for (i=0;i<sehirler.length;i++){

    console.log(sehirler[i])
}

var i=1;
while(i<=10){

    console.log(i);
    i++;
}

sehirler.forEach(function(sehir){
console.log(sehir);
})