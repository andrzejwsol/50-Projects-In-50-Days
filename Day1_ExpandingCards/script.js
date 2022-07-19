const panels = document.querySelectorAll('.panel')

/*panels.forEach((panel) => {
    console.log(panel)
})
go on Live Server and do Shift + Ctrl + J
*/

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}