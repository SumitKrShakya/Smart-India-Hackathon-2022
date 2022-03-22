// const section1 = document.getElementById('m3-s2')
const m3_desc = document.querySelectorAll('.s-content')
const m3_svg = document.querySelectorAll('.s-svg')




const car = document.getElementById('line-car')
const allArrow = document.querySelectorAll('.arrow')
let stepsArrow = [0, 0, 0, 0, 0, 0, 0]
let stepsStopper = false;
window.onscroll = () => {
    if (stepsStopper) {
        return;
    }

    if (stepsArrow[stepsArrow.length - 1] != 0) {
        stepsStopper = true;
    }

    for (let i = 0; i < allArrow.length; i++) {
        // console.log("heeey", allArrow[i])
        if (!allArrow[i].classList.contains('animat')) {
            let temp = (Math.round(allArrow[i].getBoundingClientRect().top) - Math.round(car.getBoundingClientRect().bottom))
            if (temp <= 40) {
                allArrow[i].classList.add('animat');
                allArrow[i].children[0].classList.add('circle-animation')
                allArrow[i].children[0].children[0].classList.add('circle-animation')
                allArrow[i].children[0].children[0].children[0].classList.add('circle-animation')
                console.log("child", allArrow[i].children[0].children)
            }
        }
    }

    // const tt = document.querySelector('.arrow');
    // console.log(Math.round(car.getBoundingClientRect().bottom), Math.round(tt.getBoundingClientRect().bottom))
    // let temp = (Math.round(tt.getBoundingClientRect().top) - Math.round(car.getBoundingClientRect().bottom))
    // console.log("temp", temp)
    // if (temp <= 40) {
    //     tt.classList.add('animat');
    // }
}

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