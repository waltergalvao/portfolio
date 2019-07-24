/*===Navigation Drawer===*/
function openNavigationDrawer() {
    navigationDrawer.classList.add("navigation__drawer--open");
    navigationMask.classList.remove("d-none");
}

function closeNavigationDrawer() {
    navigationDrawer.classList.remove("navigation__drawer--open");
    navigationMask.classList.add("d-none");
}

openNavigation.onclick = () => openNavigationDrawer();
closeNavigation.onclick = () => closeNavigationDrawer();
navigationMask.onclick = () => closeNavigationDrawer();