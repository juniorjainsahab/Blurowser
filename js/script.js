let previousElement = null;
let onmouseover = window.onmouseover;
let state = false;

function activeBlurowser() {
    window.onmouseover = function (e) {
        const currentElement = e.target;
        if (previousElement === null) {
            currentElement.classList.add("element-selector");
            previousElement = currentElement;
        } else {
            currentElement.classList.add("element-selector");
            previousElement.classList.remove("element-selector");
            previousElement = currentElement
        }
        currentElement.addEventListener("click", function () {
            currentElement.classList.add("blur-active")
        })
    }
}

function inactiveBlurowser() {
    window.onmouseover = onmouseover
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "activate-and-deactivate-blurowser") {
            if (state === false) {
                state = true;
                activeBlurowser();
            } else {
                state = false;
                inactiveBlurowser();
            }
        }
    }
);
