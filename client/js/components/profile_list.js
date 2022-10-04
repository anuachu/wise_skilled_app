function renderProfileList() {
  document.querySelector('#page').innerHTML = `

    <section class='profile-list'>
      ${renderProfiles()}
    </section>
  `
}   
    
  function renderProfiles() {  

    return state.profiles.map(profile =>`
      <section class='profile'>
        <header>
          <h2>${profile.headline}</h2>
        </header>
        <p>${profile.skills_summary}</p>
        <p>${profile.location}</p>
        <p>${profile.rate}</p>
        <p>${profile.contact}</p>
        <img src="${profile.profile_img}">

      </section>
    `).join('')
}