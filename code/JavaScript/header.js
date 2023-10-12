var slist = false;
const tryList = document.getElementById("trylist")
function showlist() {
    if (slist) {
        tryList.style = ("right: 100%")
       
    } else {
        tryList.style = ("right : 0;")
    }
    slist = !slist
}