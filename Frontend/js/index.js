// const section1 = document.getElementById('m3-s2')
const m3_desc = document.querySelectorAll('.s-content')
const m3_svg = document.querySelectorAll('.s-svg')
console.log(m3_desc)
const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px 500px"
}
console.log('asd')
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        console.log('s' + entry.target.dataset.stepnumber + '-svg')
        if (entry.isIntersecting) {
            // console.log("StepNumber", entry.target.dataset.stepnumber)
            document.getElementById('s' + entry.target.dataset.stepnumber + '-svg').classList.add("ani-svg")
            entry.target.classList.add("ani");
        } else {
            document.getElementById('s' + entry.target.dataset.stepnumber + '-svg').classList.remove("ani-svg")
            entry.target.classList.remove("ani");
        }
    })
}, options)

m3_desc.forEach(description => {
    observer.observe(description)
})