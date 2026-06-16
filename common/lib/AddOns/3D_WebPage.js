const hideCell = document.getElementsByClassName("vitrineGrid");
HideComponents();
function HideComponents() {
    /*Hide all component*/
    for (let i = 0; i < hideCell.length; i++) {
        hideCell[i].style.display = "none";
    }
    SwitchHideComponent(false);
}


function ShowComponent(ComponentIdName) {
    HideComponents();
    const component = document.getElementById(ComponentIdName);
    component.style.display = "grid";
    SwitchHideComponent(true);
}

function SwitchHideComponent(hideComp) {
    const hidding = document.getElementsByClassName("hideComponent")[0];
    if (hidding == null) {
        return;
    }

    if (hideComp) {
        hidding.style.visibility = "visible";
        hidding.style.opacity = "1";
    }
    else {
        hidding.style.visibility = "hidden";
        hidding.style.opacity = "0";
    }
}