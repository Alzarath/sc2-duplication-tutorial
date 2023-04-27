function checkBoxEvent(event) {
    checkBox(event.srcElement.id);
}

function checkBox(checkboxID) {
    let elementCB = document.getElementById(checkboxID);
    let elementLink = elementCB.parentNode.getElementsByTagName('a')[0];
    let childList = elementCB.parentNode.getElementsByClassName("cleanList")[0]
    let children = null
    if (childList) {
        children = childList.getElementsByTagName('Input')
    }

    let section = document.querySelector(elementLink.hash);
    let affectedBoxes = document.getElementsByClassName(elementCB.attributes.affectedBoxes.value);

    if (elementCB.checked) {
        elementLink.className = "";
        section.className = "";
        for (cb of affectedBoxes) {
            cb.checked = true;
        }
        if (childList) {
            childList.classList.remove("disabledElement")
        }
    } else {
        elementLink.className = "disabledLink";
        section.className = "disabledElement";
        for (cb of affectedBoxes) {
            cb.checked = false;
        }
        if (childList) {
            childList.classList.add("disabledElement")
            for (child of children) {
                if (child.checked) {
                    child.checked = false;
                    checkBox(child.id)
                }
            }
        }
    }
}

let options = document.getElementById("options");
for (option of options.getElementsByTagName("input")) {
    option.addEventListener("click", checkBoxEvent);
    if (option.checked) {
        checkBox(option.id);
    }
}