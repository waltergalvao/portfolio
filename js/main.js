/*===Navigation Drawer===*/
function openNavigationDrawer() {
    navigationDrawer.classList.add("navigation__drawer--open");
    navigationMask.classList.add("navigation__mask--visible");
    document.body.style.overflow = "hidden";
}

function closeNavigationDrawer() {
    navigationDrawer.classList.remove("navigation__drawer--open");
    navigationMask.classList.remove("navigation__mask--visible");
    document.body.style.overflow = "auto";
}

openNavigation.onclick = () => openNavigationDrawer();
closeNavigation.onclick = () => closeNavigationDrawer();
navigationMask.onclick = () => closeNavigationDrawer();