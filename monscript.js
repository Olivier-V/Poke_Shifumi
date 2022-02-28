var vous;
var ordi;
var vosPoints=0;
var pointsOrdi=0;

$("#vosPoints").text(vosPoints);
$("#pointsOrdi").text(pointsOrdi);

function Votrechoix(v){
    vous=v;
    setTimeout(Choixordi , 2000);
}

function Choixordi(){
    ordi=Math.round(Math.random()*2)+1;
    if (ordi == 1){
        $("#choixOrdi1").show();
        $("#choixOrdi2").hide();
        $("#choixOrdi3").hide();
    }
    else if ( ordi == 2){
        $("#choixOrdi1").hide();
        $("#choixOrdi2").show();
        $("#choixOrdi3").hide();
    }
    else if ( ordi == 3){
        $("#choixOrdi1").hide();
        $("#choixOrdi2").hide();
        $("#choixOrdi3").show();
    }
    Pipaci();
    }
    
    function Pipaci(){
    if((vous==1) && (ordi==3) || (vous==2) && (ordi==1) || (vous==3) && (ordi==2)){
        vosPoints += 10;
        $("#vosPoints").text(vosPoints);
        $("#pointsOrdi").text(pointsOrdi);
        $("#gagne").show()
        if(vosPoints > 120 || pointsOrdi >120){
            redirection()
        }
    }else{
        Ordipipaci();
    }
}

function Ordipipaci(){
    if((ordi==1) && (vous==3) || (ordi==2) && (vous==1) || (ordi==3) && (vous==2)){
        pointsOrdi += 10;
        $("#vosPoints").text(vosPoints);
        $("#pointsOrdi").text(pointsOrdi);
        $("#perd").show();
        if(vosPoints > 120 || pointsOrdi >120){
            redirection()
        }
    }else{
        vosPoints += 5;
        pointsOrdi += 5;
        $("#vosPoints").text(vosPoints);
        $("#pointsOrdi").text(pointsOrdi);      
        $("#egal").show();
        if(vosPoints > 120 || pointsOrdi >120){
            redirection()
        }
    }
}

function masquerbubli() {
    init();
    Votrechoix(1);
    $('#bulbi').slideToggle(600);
    //$('#carouselBis').slideDown(600);
    $('#pkbbulbi').animate({
        width: 80,
        height: 80
    }, 400)
    $('#pkbbulbi').animate({
        width: 170,
        height: 170
    }, 400)
    $('#pkbbulbi').animate({
        width: 150,
        height: 150
    }, 400)
    var audio = new Audio('./media/Sound.mp3');
    audio.play();
}

function redirection(){
    sessionStorage.setItem('vosPoints' , vosPoints);
    sessionStorage.setItem('pointsOrdi' , pointsOrdi);
    window.location.replace("./gameover.html");
}

function masquercara() {
    init();
    Votrechoix(3);
    $('#cara').slideToggle(600);
    //$('#carouselBis').slideDown(600);
    $('#pkbcara').animate({
        width: 80,
        height: 80
    }, 400)
    $('#pkbcara').animate({
        width: 170,
        height: 170
    }, 400)
    $('#pkbcara').animate({
        width: 150,
        height: 150
    }, 400)
    var audio = new Audio('./media/Sound.mp3');
    audio.play();
}

function masquersala() {
    init();
    Votrechoix(2);
    $('#sala').slideToggle(600);
    //$('#carouselBis').slideDown(600);
    $('#pkbsala').animate({
        width: 80,
        height: 80
    }, 400)
    $('#pkbsala').animate({
        width: 170,
        height: 170
    }, 400)
    $('#pkbsala').animate({
        width: 150,
        height: 150
    }, 400)
    var audio = new Audio('./media/Sound.mp3');
    audio.play();
}

function init() {
    //$('#carouselBis').slideUp(1000);
    $("#gagne").hide();
    $("#perd").hide();
    $("#egal").hide();
    $('#bulbi').slideUp(1000);
    $('#cara').slideUp(1000);
    $('#sala').slideUp(1000);
}





