const question = document.querySelectorAll(".select-container")

question.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('selected')
        })
    })
