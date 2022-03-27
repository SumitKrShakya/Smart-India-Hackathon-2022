const ourTeam_tab = document.querySelector('.ourteam-tab')
const aboutUs_tab = document.querySelector('.aboutus-tab')
const tab_content = document.querySelector('.tab-content')
let currTab = 1;



function tabClicked(tab) {
    console.log(currTab, tab)
    if (currTab === tab) return;

    if (tab === 0) {
        aboutUs_tab.classList.add('currTabClass');
        ourTeam_tab.classList.remove('currTabClass');
        tab_content.innerHTML = aboutUs_content

    } else {
        ourTeam_tab.classList.add('currTabClass');
        aboutUs_tab.classList.remove('currTabClass');
        let temp = ""
        for (let i = 0; i < 6; i++) {
            temp += ourTeam_content
        }
        tab_content.innerHTML = temp


    }
    currTab = tab
}

let ourTeam_content = `<div class="member-box">
<div class="member-photo">
    <img src="../svg/shivam.svg" alt="image">
</div>
<div class="detail">

    <div class="member-name">
        <b>Shivam Gupta<br>(Team Leader)
            </b>
    </div>
    <div class="member-descrip">

        <br>Frontend Developer <br> I am 3rd Year Undergrad @NSUT East Campus
    </div>
</div>
</div>`

let aboutUs_content = `<div class="cntnt">
We, the students of NSUT EAST CAMPUS, participating in Smart India Hackathon (SIH) 2022.
Out of several problem statements provided by SIH 2022 we have chosen ‘‘Moving vehicle registration plate detection’’ given under Coal India Limited.
The objective of our problem statement is to create an anti-theft auto security system that can extract registration number from number plate of moving vehicle. And can capture and transfer data to cloud, which can be available for further analysis of theft or proof reading.
Our solution contains four main processes: object detection, number plate extraction, character detection and character recognition and to do so we are using ML and OCR technology. 
After character recognition we will compare it with data provided in database of registered vehicles.
If vehicle is not registered then our program will send alert message to the admin via email.

</div>`
