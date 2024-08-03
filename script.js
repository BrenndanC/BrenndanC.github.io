function doalert(checkboxElem) {
    let vid = document.getElementById("backgroundVideo")
    let vidSource = document.getElementById("vidSource")
    let style = document.getElementById("styles")
    if (checkboxElem.checked) {
        style.href = "../styles/styleNature.css"
        vidSource.src = "../mp4/nature.mp4"
        vid.load()
        vid.play()
        localStorage.setItem('backgroundChoice', 'nature')
    }
    else {
        style.href = "../styles/styleSpace.css"
        vidSource.src = "../mp4/sky.mp4"
        vid.load()
        vid.play()
        localStorage.setItem('backgroundChoice', 'sky');
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    let backgroundChoice = localStorage.getItem('backgroundChoice')

    if (backgroundChoice === 'nature') {
        let checkboxElem = document.getElementById('style-box')
        checkboxElem.checked = true
        doalert(checkboxElem)
    }
})