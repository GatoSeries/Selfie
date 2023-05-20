var SpeechRecognition = window.webkitSpeechRecognition;

var bot = new SpeechRecognition();

var Textbox = document.getElementById("textbox");

function start(){
    Textbox.innerHTML = "";
    bot.start();
}

bot.onresult = function (event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    Textbox.innerHTML = Content;
    console.log(Content);

    if (Content == "Toma mi selfie") {
        console.log("selfie");
        speack();
    }
}
function speack(){
    var synth = window.speechSynthesis;
    speack_data = "Getting your photo in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speack_data);
    synth.speak(utterThis);

    Webcam.attach(camara);

    setTimeout(function (){
        take_selfie();
        save();
    },5000); 
}
camara = document.getElementById("camara");
Webcam.set({
    width: 360,
    height: 360,
    image_format: 'png',
    png_quality: 100
});

function take_selfie() {
    Webcam.snap(function (data_uri) {
document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
let previousTitle = document.title

window.addEventListener('blur', () => {
previousTitle = document.title
document.title = '¡Wait dont go!'
})

window.addEventListener('focus', () => {
document.title = previousTitle
})
