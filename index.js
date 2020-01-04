const mainItems = document.getElementsByClassName('main-item')
const secondaryLists = document.getElementsByClassName('secondary-list')



for(let i = 0; i < mainItems.length; i++){
    mainItems[i].addEventListener('mouseenter', (e) => {
        secondaryLists[i].classList.toggle('active')
    })
    mainItems[i].addEventListener('mouseleave', (e) => {
        secondaryLists[i].classList.remove('active')
    })
}
