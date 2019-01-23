/* Default state of sidebar (1=open) */
let sideBarOut = 1

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
        if (sideBarOut === 1) {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        sideBarOut = 0;
        }
    else {
        document.getElementById("mySidebar").style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
        sideBarOut = 1;
        }
    }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    sideBarOut = 0;
  }