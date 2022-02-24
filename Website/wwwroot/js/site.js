
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");


function bgHover() {
    //Certs
    div1.addEventListener("mouseover", function () {
        div1.style.backgroundColor = "#cce4ff";
        div1.style.backgroundImage = "url(/images/books.jpg)";
        div1.style.backgroundSize = "200px 400px";
        div1.getElementsByTagName("P")[0].style.color = "#ffffff";
        div1.getElementsByTagName("h3")[0].style.color = "#ffffff";
    }, false);

    div1.addEventListener("mouseout", function () {
        div1.style.backgroundColor = "";
        div1.style.backgroundImage = "";
        div1.getElementsByTagName("P")[0].style.color = "";
        div1.getElementsByTagName("h3")[0].style.color = "";
    }, false);

    //Portfolio
    div2.addEventListener("mouseover", function () {
        div2.style.backgroundColor = "#cce4ff";
        div2.style.backgroundImage = "url(/images/portfolio.jpg)";
        div2.getElementsByTagName("P")[0].style.color = "#ffffff";
        div2.getElementsByTagName("h3")[0].style.color = "#ffffff";
    }, false);

    div2.addEventListener("mouseout", function () {
        div2.style.backgroundColor = "";
        div2.style.backgroundImage = "";
        div2.getElementsByTagName("P")[0].style.color = "";
        div2.getElementsByTagName("h3")[0].style.color = "";
    }, false);

    //Contact
    div3.addEventListener("mouseover", function () {
        div3.style.backgroundColor = "#cce4ff";
        div3.style.backgroundImage = "url(/images/contact.jpg)";
        div3.getElementsByTagName("P")[0].style.color = "#ffffff";
        div3.getElementsByTagName("h3")[0].style.color = "#ffffff";
    }, false);

    div3.addEventListener("mouseout", function () {
        div3.style.backgroundColor = "";
        div3.style.backgroundImage = "";
        div3.getElementsByTagName("P")[0].style.color = "";
        div3.getElementsByTagName("h3")[0].style.color = "";
    }, false);
}


function init() {
    bgHover();

}

init();