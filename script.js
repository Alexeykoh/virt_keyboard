const keyLayout_en_rows = [
    [
        ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", `${"\\"}`],
        ["caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
        ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
        ["ctrl", "opt", "cmd", "space", "⇦", "⇧", "⇩", "⇨"]
    ],
    [
        ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
        ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "[", "]", `${"\\"}`],
        ["caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
        ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
        ["ctrl", "opt", "cmd", "space", "⇦", "⇧", "⇩", "⇨"]
    ]
];


document.addEventListener('keyup', (event) => {
    writeTextarea(event.key)
    color.onclick = function() {
        document.querySelectorAll('.keys').style.backgroundColor = 'red';
      }
    // document.innerHTML(`${event.key}`).click()
    // console.log(event.key);
})

//=======================//=======================//

const keyboardDom = document.querySelector('body');
const dispalyDiv = document.createElement("textarea");
const containerDiv = document.createElement("div");
const keyboardBody = document.createElement("div");

containerDiv.classList.add(`container`);
keyboardDom.appendChild(containerDiv);
const container_ = document.querySelector('.container');

// create dispalyDiv
dispalyDiv.classList.add(`screen`);
dispalyDiv.setAttribute('id','textAreaId');
dispalyDiv.setAttribute('rows','10');
dispalyDiv.setAttribute('cols','50');
dispalyDiv.setAttribute('placeholder','hello world!');
containerDiv.appendChild(dispalyDiv);
// const screenVar = document.querySelector('.screen');

// rendering keyboard
let defLang = 0;
let replaceCh = false;
renderKeyboard(defLang, replaceCh);



