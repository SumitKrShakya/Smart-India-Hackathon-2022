// const section1 = document.getElementById('m3-s2')
const m3_desc = document.querySelectorAll('.s-content')
const m3_svg = document.querySelectorAll('.s-svg')
console.log(m3_desc)
const options = {
    root: null,
    threshold: 0,
    rootMargin: "500px 0px -150px 0px"
}
console.log('asd')
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.getElementById('s' + entry.target.dataset.stepnumber + '-svg').classList.add("ani-svg")
            if (parseInt(entry.target.dataset.stepnumber) % 2 == 0) {
                entry.target.classList.add("ani-r");
            } else {
                entry.target.classList.add("ani-l");
            }
        }

        // } else {
        //     document.getElementById('s' + entry.target.dataset.stepnumber + '-svg').classList.remove("ani-svg")
        //     if (parseInt(entry.target.dataset.stepnumber) % 2 == 0) {
        //         entry.target.classList.remove("ani-r");
        //     } else {
        //         entry.target.classList.remove("ani-l");
        //     }
        // }
    })
}, options)

m3_desc.forEach(description => {
    observer.observe(description)
})