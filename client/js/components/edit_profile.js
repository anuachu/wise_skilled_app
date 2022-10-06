function renderEditProfile() {
  const profileListDOM = document.querySelector('#page')

console.log(state.loggedInUserName)

  const matchingAuthors = state.profiles.filter(function (profile){
    return profile.author == state.loggedInUserName
  })

  console.log(matchingAuthors) 
//TEsting Comment
//********************* */
  profileListDOM.innerHTML =
  matchingAuthors.map(profile =>
  `<section class="profile" data-id='${profile.id}'>
      <span onClick="deleteProfile(event)">delete</span>
    <form onSubmit="updateProfile(event)">
      <h2>Edit Profile</h2>
      <fieldset>
      <label for="">Headline: </label>
      <input type="text" name="headline" value="${profile.headline}">
    </fieldset>
    <fieldset>
      <label for="">Skills summary: </label>
      <input type="text" name="skills_summary" value="${profile.skills_summary}">
    </fieldset>
    <fieldset>
      <label for="">Location: </label>
      <input type="text" name="location" value="${profile.location}" >
    </fieldset>
    <fieldset>
      <label for="">Profile photo: </label>
      <input type="text" name="profile_img" value="${profile.profile_img}">
    </fieldset>
    <fieldset>
      <label for="">Rate: </label>
      <input type="text" name="rate" value="${profile.rate}">
    </fieldset>
    <fieldset>
      <label for="">Contact: </label>
      <input type="text" name="contact" value="${profile.contact}">
    </fieldset>
        <input type="hidden" name="id" value="${profile.id}"> 
        <button type="submit">Update product</button>
    </form>
  </section>
`)
}

function updateProfile(event) {
  event.preventDefault()
  const form = event.target 
  const data = Object.fromEntries(new FormData(form))
  const profileId = data.id
  var profileIndex = null

  state.profiles.forEach((profile, index) => {
    if(profile.id === profileId){
      profileIndex = index
    }
    return profileIndex
  })

  fetch(`/api/profiles/${profileId}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(profile => {
        state.profiles[profileIndex] = profile
        renderProfileList()
    })
}

function deleteProfile(event) {
  const deleteBtn = event.target
  const profileDOM = deleteBtn.closest('.profile')
  const profileId = profileDOM.dataset.id

  fetch(`/api/profiles/${profileId}`, {
    method: 'DELETE'
  })
    .then(() => {
      state.profiles = state.profiles.filter(p => p.id != profileId)
      renderProfileList()
    })
}
