function digiClock(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;
    session = h > 11 ? "PM" : session;
    document.getElementsByTagName("h1")[0].innerHTML = h + " : "+m+" : "+" : "+s+" "+session;
    setTimeout(digiClock(),1000)
    

}