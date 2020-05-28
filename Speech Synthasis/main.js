const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populate() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices.map(v => `<option value="${v.name}">${v.name}(${v.lang})</options>`).join('');
    toggle();
}

function toggle(startover = true) {
    speechSynthesis.cancel();
    if (startover) {
        speechSynthesis.speak(msg);
    }
}

function setVoice() {
    console.log("hi")
    msg.voice = voices.find(voice => voice.name === this.value);
}

function setOptions() {
    msg[this.name] = this.value;
    toggle();
}
options.forEach(o => o.addEventListener('change', setOptions));
voicesDropdown.addEventListener('change', setVoice);
speechSynthesis.addEventListener('voiceschanged', populate);
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false))