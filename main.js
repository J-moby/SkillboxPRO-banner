const loader = document.querySelector('.loader')

const listEl = document.querySelector('.loader__console-list')

let inputEl = document.createElement('input')
inputEl.classList.add('loader__console-input')
inputEl.placeholder = '_'

const itemEl = document.createElement('li')
itemEl.classList.add('loader__console-item')

function renderText(text) {
    const itemEl = document.createElement('li')
    itemEl.classList.add('loader__console-item')

    listEl.append(itemEl)
    for (let i in [...text]) {
        let letter = document.createElement('span')
        letter.textContent = [...text][i]

        letter.style.animationDelay = i / 40 + 's'
        itemEl.appendChild(letter)
    }
}

function renderInput(t) {
    listEl.append(itemEl)

    for (let i in [...t]) {
        let letter = document.createElement('span')
        letter.textContent = [...t][i]
        letter.style.animationDelay = i / 40 + 's'
        
        itemEl.appendChild(letter)
    }
    setTimeout(() => itemEl.append(inputEl), 1000)
}

const heroBlock = document.querySelector('.hero')

inputEl.addEventListener('keydown', (key) => {
    let temp = ((inputEl.value).toLowerCase()).trim()

    if (key.key === 'Enter' && temp == 'init' || key.key === 'Enter' && temp == 'start') {
        loader.classList.remove('loader--active')
        heroBlock.classList.add('hero--is-animate')
    }
})

const heroBtns = document.querySelectorAll('.hero__btn')
const presentCard = document.querySelectorAll('.present__card')

const closeBtn = document.querySelector('.present__close-btn')

closeBtn.addEventListener('click', () => {
    heroBlock.classList.remove('hero--active')
    presentCard.forEach((i) => {
        i.removeAttribute('style')
    })
})

heroBtns[0].addEventListener('click', () => {
    heroBlock.classList.add('hero--active')
    presentCard[0].style.maxHeight = '1900px'
})

heroBtns[1].addEventListener('click', () => {
    heroBlock.classList.add('hero--active')
    presentCard[1].style.maxHeight = '1900px'
})

heroBtns[2].addEventListener('click', () => {
    heroBlock.classList.add('hero--active')
    presentCard[2].style.maxHeight = '1900px'
})

heroBtns[3].addEventListener('click', () => {
    heroBlock.classList.add('hero--active')
    presentCard[3].style.maxHeight = '1900px'
})

heroBtns[4].addEventListener('click', () => {
    heroBlock.classList.add('hero--active')
    presentCard[4].style.maxHeight = '1900px'
})

heroBtns[5].addEventListener('click', () => {
    heroBlock.classList.add('hero--active')
    presentCard[5].style.maxHeight = '1900px'
})

heroBtns[6].addEventListener('click', () => {
    heroBlock.classList.add('hero--active')
    presentCard[6].style.maxHeight = '1900px'
})


setTimeout(() => renderText('// Loading... start working area profession/backend.py'), 100)
setTimeout(() => renderText('// FORMAT TOM [/C:Data_Analyst] 50%, 100% ...complete'), 1500)
setTimeout(() => renderText('// Loading... soft_skills.exe // sending... doge.png'), 3000)
setTimeout(() => renderText('// console.log (frontend = javascript.html) // undefined'), 5000)
setTimeout(() => renderText('// Loading... C++/GameDev.exe // 5 FPS'), 6900)
setTimeout(() => renderText('// Start test.exe // find bugs count = 100500'), 8500)
setTimeout(() => renderText('// Loading career/offer.pdf // starting... execute order 66'), 10500)
setTimeout(() => renderText('// SkillboxPro is done press "start" to pay respect'), 12500)
setTimeout(() => renderInput('>_SkillboxPro '), 14500)