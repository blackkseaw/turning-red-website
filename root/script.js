function mudaBotao() {

    console.log(document.getElementById("svg1").style.fill)

    if (document.getElementById("svg1").style.fill == "rgb(182, 0, 0)" || document.getElementById("svg1").style.fill == ""){
        document.getElementById("svg1").style.fill = "#fff"
        document.getElementById("svg2").style.fill = "#b60000"
        document.getElementById("svg3").style.fill = "#b60000"
        document.getElementById("svg4").style.fill = "#b60000"
        document.getElementById("svg5").style.fill = "#b60000"
        document.getElementById("svg6").style.fill = "#b60000"
        document.getElementById("svg7").style.fill = "#b60000"
    }

}

function mudaBotao2() {

    console.log(document.getElementById("svg2").style.fill)

    if (document.getElementById("svg2").style.fill == "rgb(182, 0, 0)" || document.getElementById("svg2").style.fill == ""){
        document.getElementById("svg1").style.fill = "#b60000"
        document.getElementById("svg2").style.fill = "#fff"
        document.getElementById("svg3").style.fill = "#b60000"
        document.getElementById("svg4").style.fill = "#b60000"
        document.getElementById("svg5").style.fill = "#b60000"
        document.getElementById("svg6").style.fill = "#b60000"
        document.getElementById("svg7").style.fill = "#b60000"
        
    }

}

function mudaBotao3() {

    console.log(document.getElementById("svg3").style.fill)

    if (document.getElementById("svg3").style.fill == "rgb(182, 0, 0)" || document.getElementById("svg3").style.fill == ""){
        document.getElementById("svg1").style.fill = "#b60000"
        document.getElementById("svg2").style.fill = "#b60000"
        document.getElementById("svg3").style.fill = "#fff"
        document.getElementById("svg4").style.fill = "#b60000"
        document.getElementById("svg5").style.fill = "#b60000"
        document.getElementById("svg6").style.fill = "#b60000"
        document.getElementById("svg7").style.fill = "#b60000"
        
    }

}

function mudaBotao4() {

    console.log(document.getElementById("svg4").style.fill)

    if (document.getElementById("svg4").style.fill == "rgb(182, 0, 0)" || document.getElementById("svg4").style.fill == ""){
        document.getElementById("svg1").style.fill = "#b60000"
        document.getElementById("svg2").style.fill = "#b60000"
        document.getElementById("svg3").style.fill = "#b60000"
        document.getElementById("svg4").style.fill = "#fff"
        document.getElementById("svg5").style.fill = "#b60000"
        document.getElementById("svg6").style.fill = "#b60000"
        document.getElementById("svg7").style.fill = "#b60000"
        
    }

}

function mudaBotao5() {

    console.log(document.getElementById("svg5").style.fill)

    if (document.getElementById("svg5").style.fill == "rgb(182, 0, 0)" || document.getElementById("svg5").style.fill == ""){
        document.getElementById("svg1").style.fill = "#b60000"
        document.getElementById("svg2").style.fill = "#b60000"
        document.getElementById("svg3").style.fill = "#b60000"
        document.getElementById("svg4").style.fill = "#b60000"
        document.getElementById("svg5").style.fill = "#fff"
        document.getElementById("svg6").style.fill = "#b60000"
        document.getElementById("svg7").style.fill = "#b60000"
        
    }

}

function mudaBotao6() {

    console.log(document.getElementById("svg6").style.fill)

    if (document.getElementById("svg6").style.fill == "rgb(182, 0, 0)" || document.getElementById("svg6").style.fill == ""){
        document.getElementById("svg1").style.fill = "#b60000"
        document.getElementById("svg2").style.fill = "#b60000"
        document.getElementById("svg3").style.fill = "#b60000"
        document.getElementById("svg4").style.fill = "#b60000"
        document.getElementById("svg5").style.fill = "#b60000"
        document.getElementById("svg6").style.fill = "#fff"
        document.getElementById("svg7").style.fill = "#b60000"
        
    }

}

function mudaBotao7() {

    console.log(document.getElementById("svg7").style.fill)

    if (document.getElementById("svg7").style.fill == "rgb(182, 0, 0)" || document.getElementById("svg7").style.fill == ""){
        document.getElementById("svg1").style.fill = "#b60000"
        document.getElementById("svg2").style.fill = "#b60000"
        document.getElementById("svg3").style.fill = "#b60000"
        document.getElementById("svg4").style.fill = "#b60000"
        document.getElementById("svg5").style.fill = "#b60000"
        document.getElementById("svg6").style.fill = "#b60000"
        document.getElementById("svg7").style.fill = "#fff"
        
    }

}

let popup1 = document.getElementById("popup1");

function openPopup(){
    popup1.classList.add("open-popup");
};

function closePopup(){
    popup1.classList.remove("open-popup");
};

var fourtown = document.getElementById("fourtown")
var play = document.getElementById("play")

play.onclick = function(){
    if(fourtown.paused){
        fourtown.play();
        play.src = "assets/pause.png"
    }
    else{
        fourtown.pause();
        play.src = "assets/play.png"
    }
}