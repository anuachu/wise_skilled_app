function renderNavBar() {
  document.querySelector('#nav').innerHTML = 
  `<nav class="header-nav">
  <ul>
    <li onClick="renderProfileList()"> <span class="material-symbols-outlined edit-profile" >home</span> Home
    </li>
    <li onClick="renderAddProfile()"> <span class="material-symbols-outlined edit-profile" >add_circle</span> Add Profile
    </li>
    <li onClick="renderEditProfile()"> <span class="material-symbols-outlined edit-profile" >edit</span> Edit Profile
    </li>
    <li onClick="renderLogout()"><span class="material-symbols-outlined edit-profile">logout</span> Logout </li>
  </ul>
</nav>
`
}


function renderNavWhenNotLogin() {
  document.querySelector('#nav').innerHTML =
  `<nav class="header-nav">
  <ul>
    <li onClick="renderProfileList()"> <span class="material-symbols-outlined edit-profile" >home</span> Home
    </li>
    <li onClick="renderSignUp()"> <span class="material-symbols-outlined edit-profile" >person_add</span> Sign-Up
    </li>
    <li onClick="renderLogin()"> <span class="material-symbols-outlined edit-profile" >account_circle</span> Login
    </li>
  </ul>
  </nav>`
}



function renderNavBarMobileWhenNotLoggedIn(){
  document.querySelector('#mobile_nav').innerHTML =
  `<div id="hamburguer-icon" onclick="toggleMobileMenu(this)">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  <ul class="mobile-menu">
    <li onClick="renderProfileList()">Home</li>
    <li onClick="renderSignUp()">Sign-Up</li>
    <li onClick="renderLogin()">Login</li>
  </ul>
  </div>  `
}

function renderNavBarMobile(){
  document.querySelector('#mobile_nav').innerHTML =
  `<div id="hamburguer-icon" onclick="toggleMobileMenu(this)">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  <ul class="mobile-menu">
    <li onClick="renderProfileList()">Home</li>
    <li onClick="renderAddProfile()">Add profile</li>
    <li onClick="renderEditProfile()">Edit</li>
    <li onClick="renderLogout()"><span>Logout</span</li>
  </ul>
  </div>  `
}