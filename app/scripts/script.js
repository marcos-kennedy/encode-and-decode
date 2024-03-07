const textEncryptedContainer = document.querySelector('#encrypted-text-container');
const imageSecurity = document.querySelector('.image-security');
const informationSubTitle = document.querySelector('.information-subtitle');
const informationText = document.querySelector('.information-text');

let enterTextOrigin = ''; 
let textarea = document.getElementById('ienter_text'); 
let contentText = document.createElement('p');
let buttonCopy = document.createElement('button');

function encode() {
    if (contentText.textContent === enterTextOrigin) {
        contentText.textContent = '';
    }

    enterTextOrigin = document.getElementById('ienter_text').value;
    if(!contemApenasMinusculasSemAcento(enterTextOrigin)){
        alert("Digite apenas letras minúsculas e sem acento.");
        location.reload(true);
    }
    textarea.classList.add('hide');
    const array = enterTextOrigin.split('').filter(char => /[a-z]/.test(char));
    let textEncrypted = '';
    
    array.forEach(letter => {
        switch (letter) {
            case 'a':
                textEncrypted += 'ai';
                break;
            case 'e':
                textEncrypted += 'enter';
                break;
            case 'i':
                textEncrypted += 'imes';
                break;
            case 'o':
                textEncrypted += 'ober';
                break;
            case 'u':
                textEncrypted += 'ufat';
                break;  
            default:
                textEncrypted += letter;
                break;
        }
    });

    imageSecurity.classList.add('hide');
    informationSubTitle.classList.add('hide');
    informationText.classList.add('hide');
    contentText.textContent = textEncrypted;

    if (buttonCopy.classList.contains('hide')) {
        buttonCopy.classList.remove('hide');
    } else {
        buttonCopy.textContent = 'Copiar';
        buttonCopy.classList.add('button-copy')
        buttonCopy.addEventListener('click', () => {
            navigator.clipboard.writeText(contentText.textContent);
            textarea.value = '';
            textarea.classList.remove('hide');
            contentText.classList.add('hide');
            buttonCopy.classList.add('hide');
            imageSecurity.classList.remove('hide');
            textEncryptedContainer.appendChild(imageSecurity);
        });
    }

    textEncryptedContainer.appendChild(contentText);
    textEncryptedContainer.appendChild(buttonCopy);
}

function decode(){
    buttonCopy.classList.add('hide');
    contentText.classList.add('hide');
    contentText.textContent = enterTextOrigin;
    contentText.classList.remove('hide');
    textEncryptedContainer.appendChild(contentText);
}

function contemApenasMinusculasSemAcento(str) {
    return /^[a-z]*$/.test(str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
}
