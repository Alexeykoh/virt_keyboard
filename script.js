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
function renderKeyboard(languageCode, replaceCh){

   for (let i = 1; i <= 5 ; i++){
    const rowCreatte = document.createElement("div");
    rowCreatte.classList.add(`row`);
    rowCreatte.setAttribute('id',`${i}`);
    container_.appendChild(rowCreatte);

   }
    for (let i = 0; i <= keyLayout_en_rows[languageCode].length-1 ; i++){
        // console.log(keyLayout_en_rows[languageCode][i]);
        for (let k = 0; k <= keyLayout_en_rows[languageCode][i].length-1 ; k++){
            const keyboardBody = document.createElement("div");

            switch (keyLayout_en_rows[languageCode][i][k]){
                case 'space':
                    keyboardBody.classList.add(`space`);
                    keyboardBody.classList.add(`optKey`);
                    break;
                case 'Backspace':
                    keyboardBody.classList.add(`Backspace`);
                    keyboardBody.classList.add(`optKey`);
                    break;
                case 'Tab':
                    keyboardBody.classList.add(`optKey`);
                    break;
                case 'caps':
                    keyboardBody.classList.add(`caps`);
                    keyboardBody.classList.add(`optKey`);
                    break;
                case 'Enter':
                    keyboardBody.classList.add(`Enter`);
                    keyboardBody.classList.add(`optKey`);
                    break;
                case 'Shift':
                    keyboardBody.classList.add(`Shift`);
                    keyboardBody.classList.add(`optKey`);
                    break;
                case 'ctrl':
                    keyboardBody.classList.add(`ctrl`);
                    keyboardBody.classList.add(`optKey`);
                    break;
                case 'opt':
                    keyboardBody.classList.add(`opt`);
                    keyboardBody.classList.add(`optKey`);
                    break;
                case 'cmd':
                    keyboardBody.classList.add(`cmd'`);
                    keyboardBody.classList.add(`optKey`);
                    break;

                default:
                    keyboardBody.classList.add(`keys`);
            }


            keyboardBody.innerHTML = `${keyLayout_en_rows[languageCode][i][k]}`;

            if (replaceCh){
                document.getElementById(`${i+1}`).replaceChild(keyboardBody, keyboardBody);
                console.log('true');
            } else {
                document.getElementById(`${i+1}`).appendChild(keyboardBody);
                console.log('false');
            }
            keyboardBody.addEventListener("click", keyClick);
        }
   }
}

function keyClick () {
    writeTextarea(this.innerHTML)
}

function writeTextarea (input){
    let textAreaValue = document.getElementById('textAreaId').value;

    switch (input){
        case ('Backspace'):
            let backspace = textAreaValue;
            backspace = backspace.substring(0, backspace.length-1);
            // console.log(typeof input, input);
            document.getElementById('textAreaId').value = backspace;
            break;
        case 'space':
            textOutput(' ');
            break;

        case 'Meta':
        case 'ctrl':
        case 'command':
            break;

        case 'Alt':
        case 'alt':
            break;

        case ('Shift'):
            break;

        case ('Enter'):
            nextLine()
            function nextLine (){
                document.getElementById('textAreaId').value += '\r\n';
            }
            break;

        case ('Tab'):
            document.getElementById('textAreaId').value += '    ';
            break;

        case 'Caps':
        case 'CapsLock':
        case 'caps':
            renderUpperCase();
            break;

        case 'ctrl':
        case 'Control':
            break;

        default:
            textOutput(input);
            function textOutput (textInput){
                document.getElementById('textAreaId').value += textInput;
                // console.log(typeof input, input);
            }
    }
}

function renderUpperCase(){
    document.querySelectorAll('.keys').forEach((key) => {
        key.innerHTML =  key.innerHTML.toUpperCase()
    })
}