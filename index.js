const question = document.querySelectorAll(".select-container")
const arrow = document.querySelectorAll(".arrow")
const answer = document.querySelectorAll(".answer")

question.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('selected')
        })
    })
