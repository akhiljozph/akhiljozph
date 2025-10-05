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
const techStack = [{
    techName: "Angular",
    imageURL: "./assets/icons/png/angular.png"
}, {
    techName: "React.js",
    imageURL: "./assets/icons/png/reactjs.png"
}, {
    techName: "Express.js",
    imageURL: "./assets/icons/png/expressjs.png"
}, {
    techName: "koa.js",
    imageURL: "./assets/icons/png/koajs.png"
}, {
    techName: "Nest.js",
    imageURL: "./assets/icons/jpg/nestjs.jpg"
}, {
    techName: "MongoDB",
    imageURL: "./assets/icons/png/mongodb.png"
}, {
    techName: "MySQL",
    imageURL: "./assets/icons/png/expressjs.png"
}, {
    techName: "PostgreSQL",
    imageURL: "./assets/icons/png/postgresql.png"
}, {
    techName: "Redis",
    imageURL: "./assets/icons/png/redis.png"
}, {
    techName: "HTML5",
    imageURL: "./assets/icons/png/html5.png"
}, {
    techName: "CSS3",
    imageURL: "./assets/icons/png/css3.png"
}, {
    techName: "JavaScript",
    imageURL: "./assets/icons/png/javascript.png"
}, {
    techName: "TypeScript",
    imageURL: "./assets/icons/png/typescript.png"
}, {
    techName: "RxJS",
    imageURL: "./assets/icons/png/rxjs.png"
}, {
    techName: "Storybook.js",
    imageURL: "./assets/icons/png/storybook.png"
}, {
    techName: "Redux.js",
    imageURL: "./assets/icons/png/redux.png"
}, {
    techName: "NGXS",
    imageURL: "./assets/icons/png/ngxs.png"
}, {
    techName: "Mui",
    imageURL: "./assets/icons/png/mui.png"
}, {
    techName: "Bootstrap",
    imageURL: "./assets/icons/png/bootsrap.png"
}, {
    techName: "TailwindCSS",
    imageURL: "./assets/icons/png/tailwindcss.png"
}, {
    techName: "JSS",
    imageURL: "./assets/icons/png/jss.png"
}, {
    techName: "Sequelize",
    imageURL: "./assets/icons/png/sequelize.png"
}, {
    techName: "Solidity",
    imageURL: "./assets/icons/svg/solidity.svg"
}, {
    techName: "Hardhat",
    imageURL: "./assets/icons/png/hardhat.png"
}, {
    techName: "Jest",
    imageURL: "./assets/icons/png/jest.png"
}, {
    techName: "Websocket",
    imageURL: "./assets/icons/svg/websocket.svg"
}, {
    techName: "GIT",
    imageURL: "./assets/icons/png/git.png"
}, {
    techName: "GCP",
    imageURL: "./assets/icons/png/gcp.png"
}];

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