const pt = document.querySelector('#pt');
const en = document.querySelector('#en');
const theme = document.querySelector('#theme');

const h4 = document.querySelector('h4');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const textButtom = document.querySelector('button');

const h4_pt = 'Olá, sou Nanang Prasetya';
const h2_pt = 'Designer de UI/UX e Desenvolvimento de Software';
const p_pt = "Sou da Indonésia e trabalho (Freelance) como desenvolvedor de software, especialmente no designer e desenvolvimento de UI/UX há mais de 2 anos na <span>empresa Panemu Indonesia<span>."
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