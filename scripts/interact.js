function checkBoxEvent(event) {
    checkBox(event.srcElement.id);
}

function checkBox(checkboxID) {
    let elementCB = document.getElementById(checkboxID);
    let elementParent = elementCB.parentNode
    let elementLink = elementParent.getElementsByTagName('a')[0];
    let section = document.querySelector(elementLink.hash);

    let affectedBoxes = document.getElementsByClassName(elementCB.attributes.affectedBoxes.value);

    if (elementCB.checked) {
        section.classList.add("enabledElement")
        elementParent.classList.add("enabledElement")
        section.classList.remove("disabledElement")
        elementParent.classList.remove("disabledElement")

        for (cb of affectedBoxes) {
            cb.checked = true;
        }
    } else {
        section.classList.remove("enabledElement")
        elementParent.classList.remove("enabledElement")
        section.classList.add("disabledElement")
        elementParent.classList.add("disabledElement")

        for (cb of affectedBoxes) {
            cb.checked = false;
        }
    }
}

let options = document.getElementById("options");
for (option of options.getElementsByTagName("input")) {
    option.addEventListener("click", checkBoxEvent);
    checkBox(option.id);
}