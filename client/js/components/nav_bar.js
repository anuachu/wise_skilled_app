function renderNavBar() {
  const navList = document.querySelector('#nav')
   return navList.innerHTML = `
  <nav class="header-nav">
      <ul>
        <li onClick="renderProfileList()"> <span class="material-symbols-outlined edit-profile" >home</span> Home
        </li>
        <li onClick="renderEditProfile()"> <span class="material-symbols-outlined edit-profile" >edit</span> Edit Profile
        </li>
      </ul>
    </nav>`
}


