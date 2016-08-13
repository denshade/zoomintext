function expandToLowerLevel(dataid) 
{
    var currentLevel = document.getElementById(dataid+'display').getAttribute('currentLevel');
    var nextView = getNextView(currentLevel);
    document.getElementById(dataid+'display').setAttribute('currentLevel', nextView);
    refreshLevel(dataid);
}

function getNextView(currentLevel) 
{
    var views = ["spaceview", "laymenview", "expertview", "perfectmodel"];
    for (var i = 0; i < views.length; i++) {
        if (views[i] === currentLevel) 
        {
            return views[Math.min(i+1, views.length - 1)];
        }
    }
}

function getPrevView(currentLevel) 
{
    var views = ["spaceview", "laymenview", "expertview", "perfectmodel"];
    for (var i = 0; i < views.length; i++) {
        if (views[i] === currentLevel) 
        {
            return views[Math.max(i-1, 0)];
        }
    }
}
function expandToUpperLevel(dataid) 
{
    var currentLevel = document.getElementById(dataid+'display').getAttribute('currentLevel');
    var nextView = getPrevView(currentLevel);
    document.getElementById(dataid+'display').setAttribute('currentLevel', nextView);
    refreshLevel(dataid);

}

/**
 * This updates the element with the current level. 
 * It reads the data from the element with dataid as id. 
 * Looks up the level from the displayelement. (The element with the same id but display behind it)
 * It looks up the level in the data json and updates the content.
 * @param {type} dataid
 * @returns {undefined}
 */
function refreshLevel(dataid)
{
    var jsonString = document.getElementById(dataid).value;
    var detailDocumentObject = JSON.parse(jsonString);
    var currentlevel = document.getElementById(dataid+'display').getAttribute('currentlevel');
    var data = detailDocumentObject[currentlevel];
    var para = document.getElementById(dataid+'display');
    document.getElementById(dataid+'display').innerHTML = data;
}