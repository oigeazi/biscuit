const pt = document.querySelector('#pt');
const en = document.querySelector('#en');

const h4 = document.querySelector('h4');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const textButtom = document.querySelector('button');

const h4_pt = 'Olá, sou Nanang Prasetya';
const h2_pt = 'Designer de UI/UX e Desenvolvimento de Software';
const p_pt = "Sou da Indonésia e trabalho (Freelance) como desenvolvedor de software, especialmente no designer e desenvolvimento de UI/UX há mais de 2 anos na empresa <span>Panemu Indonesia<span>."
const textButtom_pt = 'DIGA OLÁ';

const h4_en = "I'm Nanang Prasetya";
const h2_en = 'UI/UX Designer and Software Development';
const p_en = "I'm from Indonesia and I have been working (Freelance) as a Software Development especially in the UI/UX Designer and Development for more than 2 year at <span>Panemu Indonesia</span> company."
const textButtom_en = 'SAY HELLO';

function changeLanguage() {
    if (!localStorage.getItem('language') || localStorage.getItem('language') == 'en') {
        h4.textContent = h4_en;
        h2.textContent = h2_en;
        p.innerHTML = p_en;
        textButtom.textContent = textButtom_en;
        return;
    }

    h4.textContent = h4_pt;
    h2.textContent = h2_pt;
    p.innerHTML = p_pt;
    textButtom.textContent = textButtom_pt;
}

changeLanguage();
pt.addEventListener('click', (event) => {
    localStorage.setItem('language', 'pt');
    changeLanguage();
});

en.addEventListener('click', (event) => {
    localStorage.setItem('language', 'en');
    changeLanguage();
});

const theme = document.querySelector('#theme');
const root = document.querySelector(':root');
const img = document.querySelectorAll('img');

function changeTheme() {
    if (!localStorage.getItem('theme') || localStorage.getItem('theme') == 'light') {
        theme.src = '/assets/sun.png';

        root.style.setProperty('--titlecolor', '#000');
        root.style.setProperty('--textcolor', '#2C2C2E');
        root.style.setProperty('--spancolor', '#3040E5');
        root.style.setProperty('--background', '#fff');
        root.style.setProperty('--colorHeader', '#fff');

        for (icon of img) {
            icon.src = icon.src.replace('-light', '-dark');
        }
        return;
    }
    theme.src = '/assets/moon.png';

    root.style.setProperty('--titlecolor', '#fff');
    root.style.setProperty('--textcolor', 'rgba(255, 255, 255, 0.74)');
    root.style.setProperty('--spancolor', '#fff');
    root.style.setProperty('--background', '#050519');
    root.style.setProperty('--colorHeader', '#000');

    for (icon of img) {
        console.log(icon.src);
        icon.src = icon.src.replace('-dark', '-light');
    }
}

changeTheme();
theme.addEventListener('click', (event) => {
    if (localStorage.getItem('theme') == 'dark') {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    changeTheme();
});
