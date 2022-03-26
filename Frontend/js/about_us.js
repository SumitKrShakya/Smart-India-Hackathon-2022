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
    <img src="../images/shivamm.JPG" alt="image">
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
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>`
