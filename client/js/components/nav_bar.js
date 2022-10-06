function renderNavBar() {
  const navList = document.querySelector('#nav')
  navList.innerHTML = `
  <nav class="header-nav">
      <ul>
        <li onClick="renderProfileList()"> <span class="material-symbols-outlined edit-profile" >home</span> Home
        </li>
        <li onClick="renderAddProfile()"> <span class="material-symbols-outlined edit-profile" >add_circle</span> Add Profile
        </li>
        <li onClick="renderSignUp()"> <span class="material-symbols-outlined edit-profile" >person_add</span> Sign-Up
        </li>
        <li onClick="renderLogin()"> <span class="material-symbols-outlined edit-profile" >account_circle</span> Login
        </li>
        <li onClick="renderEditProfile()"> <span class="material-symbols-outlined edit-profile" >edit</span> Edit Profile
        </li>
      </ul>
    </nav>`
}

