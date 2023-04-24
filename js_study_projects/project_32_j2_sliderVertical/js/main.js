const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const clidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')
let activeSlideIdex = 0

sidebar.style.top = `-${(slidesCount-1)*100}vh`

upBtn.addEventListener('click',() => {
    changeSlide('up')
})

downBtn.addEventListener('click',() => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if(event.key === 'ArrowUp') {
        changeSlide('up')
    }else if ( event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction){
    if(direction === 'up'){
        activeSlideIdex++
        if(activeSlideIdex === slidesCount){
            activeSlideIdex = 0
        }
    } else if(direction === 'down'){
        activeSlideIdex--
        if(activeSlideIdex < 0){
            activeSlideIdex = slidesCount-1
        }
    }
const height = container.clientHeight

mainSlide.style.transform = `translateY(-${activeSlideIdex*height}px)`
sidebar.style.transform = `translateY(${activeSlideIdex*height}px)`
}