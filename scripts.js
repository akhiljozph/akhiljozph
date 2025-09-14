const animatedTextEl = document.getElementById('animated-text');

const texts = ['AJ.', 'Akhil Joseph.'];
const animationSpeed = 250;

function typeText(text, callback) {
    let index = 0;
    animatedTextEl.classList.add('typing');  // Disable cursor blinking

    function type() {
        if (index <= text.length) {
            animatedTextEl.innerHTML = formatText(text.slice(0, index));
            index++;
            setTimeout(type, animationSpeed);
        } else {
            animatedTextEl.classList.remove('typing');  // Re-enable cursor blinking
            if (callback) callback();
        }
    }
    type();
}

function backspaceText(text, callback) {
    let index = text.length;
    animatedTextEl.classList.add('typing');  // Disable cursor blinking

    function backspace() {
        if (index >= 0) {
            animatedTextEl.innerHTML = formatText(text.slice(0, index));
            index--;
            setTimeout(backspace, animationSpeed);
        } else {
            animatedTextEl.classList.remove('typing');  // Re-enable cursor blinking
            if (callback) callback();
        }
    }
    backspace();
}

function formatText(text) {
    return text
        .split('')
        .map(char => (char.toUpperCase() === 'A' || char.toUpperCase() === 'J')
            ? `<span class="special-char">${char}</span>`
            : char)
        .join('');
}

function runAnimation(index = 0) {
    const currentText = texts[index];
    typeText(currentText, () => {
        setTimeout(() => {
            backspaceText(currentText, () => {
                const nextIndex = (index + 1) % texts.length;
                runAnimation(nextIndex);
            });
        }, 1500);
    });
}

window.onload = () => runAnimation();
