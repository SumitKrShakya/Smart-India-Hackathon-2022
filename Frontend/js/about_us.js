let about_tab = document.querySelector(".about_tab");
let team_tab = document.querySelector(".team_tab");
let content1 = document.querySelector(".member");
let content2 = document.querySelector(".content_description");

function func1(){
    content2.style.display = "none";
    content1.style.display = "block";
    console.log("from func1")

}
function func2(){
    // tab2.addEventListener('click',()=>{
    //     // console.log('hi')
    //     content1.style.display="none";
    //     // content2.style.display= "block";
    // })
    content1.style.display = "none";
    content2.style.display = "block";

}
