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

function kullaniciVarmi(email,sifre){

    for(i=0;i<kullanicilar.length;i++){

        if(kullanicilar[i].email==email&&kullanicilar[i].sifre==sifre){
            return true
        }
    }
    return false;
}

function giris ()
{
 
    if(kullaniciVarmi(email,sifre)){

        console.log(tivitler);
    }
    else
    {

       console.log("kullanici adi veya sifresi hatali");
    }

}

giris(email,sifre);