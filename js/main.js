// **** training js >> so code is not clean ****
// **** training js >> so code is not clean ****
// **** training js >> so code is not clean ****
// **** training js >> so code is not clean ****
// **** training js >> so code is not clean ****

// menu button
let invis = document.querySelector(".invisible");
let mainclick = document.querySelector("#click");

mainclick.onclick = function () {
    invis.style.opacity = "1";
    invis.style.zIndex = "100";
    invis.classList.toggle("check");
    if (invis.classList.contains("check") !== true) {
        invis.style.opacity = "0";
        invis.style.zIndex = "-1";
    }
};


// dynamic status and up button
let btn = document.querySelector(".up");
let nums = document.querySelectorAll(".stats .number");
let target = document.querySelector(".stats.target");
let start = true;

btn.onclick = function () {
    window.scrollTo(0, 0);
};

window.onscroll = function () {

    if (window.scrollY >= 1000) {
        btn.classList.add("show");
    } else {
        btn.className = "up";
    }

    if (window.scrollY >= target.offsetTop - 450) {
        if (start) {
            nums.forEach((num) => scrolling(num));

        }
        start = false;
    }
};

function scrolling(ele) {
    let goal = ele.dataset.goal;
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == goal) {
            clearInterval(count);
        }
    }, 1000 / goal);
}

