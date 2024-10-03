



const quoteText = document.querySelector('.quote'),
quoteAuth = document.querySelector('.author'),
quoteBtn = document.querySelector('.newQ'),
speak = document.querySelector('.speak'),

twitter = document.querySelector('.twitter'),
copyto = document.querySelector('.copy');

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("https://api.quotable.io/random").then(res=>res.json()).then(result=>{
        quoteText.innerText = result.content;
        quoteAuth.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

speak.addEventListener('click', ()=>{
    // const temp="be dili kya yu hi din guzar jayngay, sirf zinda rahe hum to marr jayengay";
    // const auth = "John Elia";
    const synth = window.speechSynthesis;
    voices = synth.getVoices();
    let utter = new SpeechSynthesisUtterance(`${quoteText.innerText} said by ${quoteAuth.innerText}`);
    // utter.lang = "hi-IN";
    utter.voice = voices[1];
    synth.speak(utter);
});

copyto.addEventListener('click', ()=>{
navigator.clipboard.writeText(quoteText.innerText)
});

twitter.addEventListener("click", ()=>{
let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
window.open(twitterUrl,"_blank");
});
quoteBtn.addEventListener('click', randomQuote);