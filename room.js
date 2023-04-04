
const textData = [
    {
        title: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, style for property owners across the country " +
            "  Our experts combine form and  function in bringing your vision to life. Create a room in your" +
            " own style with our collection and make your property a  reflection of you and what you love.",
    },
    {
        title: " We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business." +
            " Locally, we’re in most major cities throughout the country. Find the branch nearest you using our" +
            " store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
        title: " Manufactured with the best materials",
        text: " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology" +
            "to ensure that every product is made as perfect and as consistent as possible. With three decades of" +
            " experience in this industry, we understand what customers want for their home and office.",
    },

]
const imageData = ["images/bg\ \(1\).jpg",
        "images/bg\ \(2\).jpg",
        "images/bg\ \(3\).jpg"]


const headerEl = document.getElementById('header');
const textEl = document.getElementById("text-title");
const pEl = document.getElementById("text-p");
const arrow_left = document.querySelector('#arrow-left')
const arrow_right = document.querySelector('#arrow-right')





let currentData = 0
let currentImage = 0














function loadContent() {


    
    let get2 = imageData[currentImage]
    headerEl.style.backgroundImage = 'url("' + get2 + '")'



    let get = textData[currentImage]

    textEl.innerText = get.title
    pEl.innerText = get.text
    headerEl.style.backgroundImage = 'url("' + get2 + '")'

}

window.addEventListener("DOMContentLoaded", () => {

    loadContent()
})

arrow_right.addEventListener("click", () => {
    currentImage++
    currentData++


    if (currentImage > imageData.length - 1) {
        currentImage = 0
    }
        if (currentData > textData.length - 1) {
            currentData = 0
        }
        loadContent()
    })


arrow_left.addEventListener("click", () => {
    currentImage--
    currentData--

    if (currentImage < 0) {
        currentImage = imageData.length - 1
    }
    if (currentData < 0) {
        currentData = textData.length - 1
    }
    loadContent()
})