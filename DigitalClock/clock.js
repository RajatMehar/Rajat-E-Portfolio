var hour1= document.getElementById("hour");
var minu1 = document.getElementById("min");
var sec1 = document.getElementById("sec");
const ampmo= document.getElementById("ampm");

function updateClock(){
    let hr = new Date().getHours();
    let mn = new Date().getMinutes();
    let se= new Date().getSeconds();
    let a= "AM";
    if(hr>12)
    {
        hr=hr-12;
        a="PM";
    }
    hr=hr<10 ? "0" + hr :hr;
    mn=mn<10 ? "0" + mn :mn;
    se=se<10 ? "0" +se :se;
    hour1.innerText =  hr;
    minu1.innerText = mn;
    sec1.innerText = se;
    ampmo.innerText=a;
    setTimeout(()=>{
        updateClock()
    },1000)

}
updateClock();