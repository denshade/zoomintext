function refreshDetails() {
    var elements = document.getElementsByClassName("leveldisplay");
    for (var index = 0; index < elements.length; index++) {
        var levelDisplay = elements.item(index);
        levelDisplay.addEventListener("click", addLevel);
        levelDisplay.addEventListener('contextmenu', removeLevel);
        var currentDisplay = levelDisplay.getAttribute("currentLevel").valueOf();
        for (var childIndex = 0; childIndex < levelDisplay.children.length; childIndex++) {
            var child = levelDisplay.children.item(childIndex);
            var levelAttribute = child.attributes.getNamedItem("level").value;
            if (currentDisplay == levelAttribute) {
                child.className = "";
            }
            else if (currentDisplay !== null) {
                child.className = "hidden";
            }
        }
    }
}
function removeLevel(event) {
    event.preventDefault();
    var level = event.srcElement.parentElement.attributes.getNamedItem("currentlevel");
    var number = parseInt(level.value);
    if (number > getMinLevel(event.srcElement.parentElement)) {
        level.value = (number - 1) + "";
    }
    console.log("level:" + level.value);
    refreshDetails();
    return false;
}
function addLevel(event) {
    if (event instanceof MouseEvent) {
        var level = event.srcElement.parentElement.attributes.getNamedItem("currentlevel");
        var number = parseInt(level.value);
        if (number < getMaxLevel(event.srcElement.parentElement)) {
            level.value = (number + 1) + "";
        }
        console.log("level:" +
            level.value);
    }
    refreshDetails();
}
function getMaxLevel(parentElement) {
    var maxLevel = -Infinity;
    for (var k = 0; k < parentElement.children.length; k++) {
        var element = parentElement.children.item(k);
        if (element.attributes.getNamedItem("level") != null) {
            var levelNr = parseInt(element.attributes.getNamedItem("level").value);
            if (levelNr > maxLevel) {
                maxLevel = levelNr;
            }
        }
    }
    return maxLevel;
}
function getMinLevel(parentElement) {
    var minLevel = Infinity;
    for (var k = 0; k < parentElement.children.length; k++) {
        var element = parentElement.children.item(k);
        if (element.attributes.getNamedItem("level") != null) {
            var levelNr = parseInt(element.attributes.getNamedItem("level").value);
            if (levelNr < minLevel) {
                minLevel = levelNr;
            }
        }
    }
    return minLevel;
}
//# sourceMappingURL=main.js.map