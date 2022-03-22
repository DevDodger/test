/*
    /js/home/siteInfo.js is a file that contains information about the site.
    it's json is stored in a const called siteInfo.
*/

const navbarText = document.getElementsByClassName("navbar-text")[0];

if (siteInfo.productionMode === "production") {
    navbarText.classList.remove("navbar-text");
    console.log = function () { };
} if (siteInfo.productionMode === "development") {
    navbarText.innerHTML = siteInfo.navbar.text.development;
    navbarText.style.color = "red";
}

console.log(siteInfo);

function createSeoMetaTags() {
    let metaTags = document.getElementsByTagName("meta");
    for (let i = 0; i < siteInfo.metadata.seoMetaTags.length; i++) {
        let metaTag = siteInfo.metadata.seoMetaTags[i];
        for (let key in metaTag) {
            if (metaTag.hasOwnProperty(key)) {
                let meta = metaTags[i];
                meta.setAttribute(key, metaTag[key]);
            }
        }
    }
}

function createFavicon() {
    let favicon = document.createElement("link");
    favicon.rel = "shortcut icon";
    favicon.href = siteInfo.metadata.favicon;
    document.head.appendChild(favicon);
}

function loadEasterEggs() {
    let easterEggs = siteInfo.easterEggs;
    for (let i = 0; i < easterEggs.length; i++) {
        let easterEgg = easterEggs[i];
        let objectTag = document.createElement("object");
        objectTag.data = easterEgg;
        objectTag.type = "text/plain";
        objectTag.style.display = "none";
        document.body.appendChild(objectTag);

        const objectTags = document.getElementsByTagName("object");
        for (let i = 0; i < objectTags.length; i++) {
            objectTags[i].style.display = "block";
            setTimeout(function () {
                objectTags[i].style.display = "none";
            }, 1);
        }
    }
}

window.onload = function () {
    createSeoMetaTags();
    createFavicon();
    loadEasterEggs();
}