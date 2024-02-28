function bigImg(x) {
    x.children[0].style.height = "30px";
    x.children[0].style.width = "30px";
    x.children[1].style.fontSize = "12px";
}

function normalImg(x) {
    x.children[0].style.height = "25px";
    x.children[0].style.width = "25px";
    x.children[1].style.fontSize = "10px";
}

function click1() {
    alert("Your cart is empty");
}

function click2() {
    alert("Please signup first");
}

function click3() {
    alert("Comming soon...!");
}

function click4() {
    alert("Search ShoeCart in playstore");
}

function click5() {
    document.write("Contact No: +91 7907143708","\t", "Email ID: nimijithnj@gmail.com");

}

function button_click(){
    alert("You are successfully Signed in...!!!")
}

var scrollingText = document.getElementById('scrollingText');
var text = document.getElementById('text');

function stopMarquee() {
    scrollingText.style.animationPlayState = 'paused';
    text.style.color = 'red';
}

function startMarquee() {
    scrollingText.style.animationPlayState = 'running';
    text.style.color = 'rgb(7, 67, 58)';
}
