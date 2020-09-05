//document click: If the user clicks anywhere in the document while the side
//menu is open, we need to close the menu, toggle the menu state, and
//re-enable all buttons/input fields on the page.
document.addEventListener("click",function(e) {
    if (document.getElementById("menuBtnIcon").classList.contains("fa-times")) {
        //Menu is open
        document.getElementById("menuBtnIcon").classList.
        remove("fa-times"); //Change back to hamburger when menu closed
        document.getElementById("menuBtnIcon").classList.add("fa-bars");
        document.getElementById("sideMenu").style.width = "0"; //retract menu
    }
    });
  
//menuBtn click: When the top-left side menu button is clicked and the menu
//is closed, we need to open it and toggle menu state variable.
document.getElementById("menuBtn").addEventListener("click",function(e) {
    let menuWidth = document.getElementById("sideMenu").style.width;
    if (menuWidth != "250px") {
    //Change hamburger to X to open menu
    document.getElementById("menuBtnIcon").classList.remove("fa-bars"); 
    document.getElementById("menuBtnIcon").classList.add("fa-times");
    document.getElementById("sideMenu").style.width = "250px"; //open up menu
    //menuWidth = document.getElementById("sideMenu").style.width;
    menuOpen = true;
    //toggleInputDisabled(true);
    //e.stopPropagation();
    } else {
    //Change X to a hamburger to close menu
    document.getElementById("menuBtnIcon").classList.remove("fa-times"); 
    document.getElementById("menuBtnIcon").classList.add("fa-bars");
    document.getElementById("sideMenu").style.width = "0px"; //close up menu
    }
    e.stopPropagation();
}); 

//bottomBarBtnClick -- When a button in the bottom bar is clicked, we toggle the mode.
var bottomBarBtnClick = function() {
    var prevMode = mode;
    //Switch mode button that is highlighted
    document.getElementById(mode).classList.remove("menuItemSelected");
    mode = this.id;
    this.classList.add("menuItemSelected");
    //Change page title
    document.getElementById("topBarTitle").textContent = modeToTitle[mode];
    //Swap out page content
    document.getElementById(prevMode + "Div").style.display = "none";
    document.getElementById(mode + "Div").style.display = "block";
    //Change menu items
    var oldItems = document.getElementsByClassName(prevMode + "Item");
    var newItems = document.getElementsByClassName(mode + "Item");
    for (var i = 0; i < oldItems.length; ++i) {
    oldItems[i].style.display = "none";
    }
    for (var i = 0; i < newItems.length; ++i) {
    newItems[i].style.display = "block";
    }
}
var menuItemClick = function() {
    var prevMode = mode;
    //Switch mode button that is highlighted
    document.getElementById(mode).classList.remove("menuItemSelected");
    mode = this.id;
    this.classList.add("menuItemSelected");
    //Change page title
    document.getElementById("topBarTitle").textContent = modeToTitle[mode];
    //Swap out page content
    document.getElementById(prevMode + "Div").style.display = "none";
    document.getElementById(mode + "Div").style.display = "block";
    //Change menu items
    var oldItems = document.getElementsByClassName(prevMode + "Item");
    var newItems = document.getElementsByClassName(mode + "Item");
    for (var i = 0; i < oldItems.length; ++i) {
    oldItems[i].style.display = "none";
    }
    for (var i = 0; i < newItems.length; ++i) {
    newItems[i].style.display = "block";
    }
}

  
  //startUp -- This function sets up the initial state of the app: Login page is
  //visible, bottom bar is invisible, all menu items invisible except feed items,
  //menu button disabled, UI mode = about
  function startUp() {
    //Hide all pages except for Login Page, which is the start page.
    document.getElementById("aboutModeDiv").style.display = "block";
    document.getElementById("introductionModeDiv").style.display = "none";
    document.getElementById("linksModeDiv").style.display = "none";
    document.getElementById("funModeDiv").style.display = "none";
    document.getElementById("gameModeDiv").style.display = "none";
    document.getElementById("cookingModeDiv").style.display = "none";
    document.getElementById("workModeDiv").style.display = "none";
    document.getElementById("jobModeDiv").style.display = "none";
    document.getElementById("educationModeDiv").style.display = "none";
    
    //document.getElementById("loginModeDiv").style.display = "block";

    //Clear all text from email and password fields
    //document.getElementById("emailInput").value = "";
    //document.getElementById("passwordInput").value = "";

    //Set top bar text
    document.getElementById("topBarTitle").textContent = "Welcome to my site";

    //Hide the bottom bar initially
    //document.getElementsByClassName("bottombar")[0].style.display = "none";
    //Hide all menu items except for About Mode items:
    var feedItems = document.getElementsByClassName("aboutModeItem");
    var roundItems = document.getElementsByClassName("funModeItem");
    var courseItems = document.getElementsByClassName("workModeItem");

    for (var i = 0; i < feedItems.length; ++i) {
        feedItems[i].style.display = "block";
      }
    for (var i = 0; i < roundItems.length; ++i) {
      roundItems[i].style.display = "none";
    }
    for (var i = 0; i < courseItems.length; ++i) {
        courseItems[i].style.display = "none";
    }

    document.getElementsByClassName("bottombar")[0].style.display = "block";
    document.getElementById("aboutMode").classList.add("menuItemSelected");
    document.getElementById("funMode").classList.remove("menuItemSelected");
    document.getElementById("workMode").classList.remove("menuItemSelected");

    //Disable menu button:
    document.getElementById("menuBtn").disabled = false;

    mode = "aboutMode";

    //set the input focus to the email field of login screen
    //document.getElementById("emailInput").focus();
  };


//Close About item
document.getElementById("modalClose").onclick = function() {
    document.getElementById("aboutModal").style.display = "none";
}
document.getElementById("modalOk").onclick = function() {
    document.getElementById("aboutModal").style.display = "none";
}
  
