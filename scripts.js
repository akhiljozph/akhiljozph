const typeTarget = document.getElementById('typeTarget');
const phrases = [
    "designing seamless user interfaces...",
    "building robust backend systems...",
    "connecting frontend with APIs...",
    "structuring efficient databases...",
    "securing applications end-to-end...",
    "scaling solutions for performance...",
    "debugging and refining code...",
    "delivering full-stack experiences..."
];

let pIndex = 0;
let cIndex = 0;
let deleting = false;

function tick() {
    const full = phrases[pIndex];
    if (!deleting) {
        cIndex++;
        typeTarget.childNodes[0].nodeValue = full.slice(0, cIndex);
        if (cIndex === full.length) {
            deleting = true;
            setTimeout(tick, 1200);
            return;
        }
    } else {
        cIndex--;
        typeTarget.childNodes[0].nodeValue = full.slice(0, cIndex);
        if (cIndex === 0) {
            deleting = false;
            pIndex = (pIndex + 1) % phrases.length;
        }
    }
    setTimeout(tick, deleting ? 40 : 70);
}

if (typeTarget.childNodes.length === 0) {
    typeTarget.appendChild(document.createTextNode(''));
}

setTimeout(tick, 600);

function subscribe() {
    const email = document.getElementById('email');
    if (!email.checkValidity()) {
        email.reportValidity();
        return;
    }
    const old = email.value;

    email.value = '';
    alert(old + ' — thanks! We will notify you when we launch.');
}

document.getElementById('year').textContent = new Date().getFullYear();