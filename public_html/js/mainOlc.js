function expandToLowerLevel(dataid) 
{
    var currentLevel = document.getElementById('currentLevel').value;
    var nextView = getNextView(currentLevel);
    document.getElementById('currentLevel').value = nextView;
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
    var currentLevel = document.getElementById('currentLevel').value;
    var nextView = getPrevView(currentLevel);
    document.getElementById('currentLevel').value = nextView;
    refreshLevel(dataid);

}


function refreshDetails()
{
    //loop over every div, find class leveldisplay
    $(".leveldisplay").each(function (number, leveldisplayer){
        var currentLevel = leveldisplayer.data("currentLevel");
        console.log(leveldisplayer);
        //For the parent node find the currentLevel.
        //Apply class hidden to each node with detail elements. except if currentLevel = detail
        //

    });
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
    var currentlevel = document.getElementById('currentLevel').value;
    var data = detailDocumentObject[currentlevel];
    var para = document.getElementById(dataid+'display');
    
    document.getElementById(dataid+'display').innerHTML = data;
}
