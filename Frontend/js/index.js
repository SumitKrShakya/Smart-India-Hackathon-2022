const section1 = document.getElementById('m3-s2')

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
}

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            section1.classList.add("ani");
        } else {
            section1.classList.remove("ani");
        }
    })
}, options)

observer.observe(section1)