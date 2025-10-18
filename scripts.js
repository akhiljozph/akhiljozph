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
    imageURL: "./assets/icons/png/angular.png",
    imageAlt: "angular"
}, {
    techName: "React.js",
    imageURL: "./assets/icons/png/reactjs.png",
    imageAlt: "react.js"
}, {
    techName: "Express.js",
    imageURL: "./assets/icons/png/expressjs.png",
    imageAlt: "express.js"
}, {
    techName: "koa.js",
    imageURL: "./assets/icons/png/koajs.png",
    imageAlt: "koa.js"
}, {
    techName: "Nest.js",
    imageURL: "./assets/icons/jpg/nestjs.jpg",
    imageAlt: "nest.js"
}, {
    techName: "MongoDB",
    imageURL: "./assets/icons/png/mongodb.png",
    imageAlt: "mongodb"
}, {
    techName: "MySQL",
    imageURL: "./assets/icons/png/mysql.png",
    imageAlt: "mysql"
}, {
    techName: "PostgreSQL",
    imageURL: "./assets/icons/png/postgresql.png",
    imageAlt: "postgresql"
}, {
    techName: "Redis",
    imageURL: "./assets/icons/png/redis.png",
    imageAlt: "redis"
}, {
    techName: "HTML5",
    imageURL: "./assets/icons/png/html5.png",
    imageAlt: "html5"
}, {
    techName: "CSS3",
    imageURL: "./assets/icons/png/css3.png",
    imageAlt: "css3"
}, {
    techName: "JavaScript",
    imageURL: "./assets/icons/png/javascript.png",
    imageAlt: "javascript"
}, {
    techName: "TypeScript",
    imageURL: "./assets/icons/png/typescript.png",
    imageAlt: "typescript"
}, {
    techName: "RxJS",
    imageURL: "./assets/icons/png/rxjs.png",
    imageAlt: "rxjs"
}, {
    techName: "Storybook.js",
    imageURL: "./assets/icons/png/storybook.png",
    imageAlt: "storybook.js"
}, {
    techName: "Redux.js",
    imageURL: "./assets/icons/png/redux.png",
    imageAlt: "redux.js"
}, {
    techName: "NGXS",
    imageURL: "./assets/icons/png/ngxs.png",
    imageAlt: "ngxs"
}, {
    techName: "Mui",
    imageURL: "./assets/icons/png/mui.png",
    imageAlt: "mui"
}, {
    techName: "Bootstrap",
    imageURL: "./assets/icons/png/bootsrap.png",
    imageAlt: "bootstrap"
}, {
    techName: "TailwindCSS",
    imageURL: "./assets/icons/png/tailwindcss.png",
    imageAlt: "tailwindcss"
}, {
    techName: "JSS",
    imageURL: "./assets/icons/png/jss.png",
    imageAlt: "jss"
}, {
    techName: "Sequelize",
    imageURL: "./assets/icons/png/sequelize.png",
    imageAlt: "sequelize"
}, {
    techName: "Solidity",
    imageURL: "./assets/icons/svg/solidity.svg",
    imageAlt: "solidity"
}, {
    techName: "Hardhat",
    imageURL: "./assets/icons/png/hardhat.png",
    imageAlt: "hardhat"
}, {
    techName: "Jest",
    imageURL: "./assets/icons/png/jest.png",
    imageAlt: "jest"
}, {
    techName: "Websocket",
    imageURL: "./assets/icons/svg/websocket.svg",
    imageAlt: "websocket"
}, {
    techName: "GIT",
    imageURL: "./assets/icons/png/git.png",
    imageAlt: "git"
}, {
    techName: "GCP",
    imageURL: "./assets/icons/png/gcp.png",
    imageAlt: "gcp"
}, {
    techName: "Docker",
    imageURL: "./assets/icons/svg/docker.svg",
    imageAlt: "docker"
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