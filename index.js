var kullanicilar= [

    {email:"turanserdar@outlook.com.tr",sifre:"12345"},
    {email:"serdarworld@gmail.com",sifre:"12345" }
    
]

var tivitler=[

{email:"turanserdar@outlook.com.tr",tivit:"Bu gun hava cok guzel"},
{email:"turanserdar@outlook.com.tr",tivit:"Bu gun hava cok guzel2"},
{email:"serdarworld@gmail.com", tivit:"Kapiyi ben acacagim!"}

]

var email= prompt("email?")

var sifre= prompt("sifre?")

function giris ()
{
 
    if((email==kullanicilar[0].email&&sifre==kullanicilar[0].sifre)||email==kullanicilar[1].email&&sifre==kullanicilar[1].sifre){

        console.log(tivitler);
    }
    else
    {

       console.log("kullanici adi veya sifresi hatali");
    }

}

giris(email,sifre);