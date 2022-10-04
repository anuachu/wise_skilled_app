function renderAddProfile() {
  document.querySelector('#page').innerHTML = `
    <section class='create-profile'>
      <form onSubmit="createProfile(event)">
      <h2>Add profile</h2>
      <fieldset>
        <label for="">Headline: </label>
        <input type="text" name="headline">
      </fieldset>
      <fieldset>
        <label for="">Skills summary: </label>
        <input type="text" name="skills_summary">
      </fieldset>
      <fieldset>
        <label for="">Location: </label>
        <input type="text" name="location">
      </fieldset>
      <fieldset>
        <label for="">Profile photo: </label>
        <input type="text" name="profile_img">
      </fieldset>
      <fieldset>
        <label for="">Rate: </label>
        <input type="text" name="rate">
      </fieldset>
      <fieldset>
        <label for="">Contact: </label>
        <input type="text" name="contact">
      </fieldset>
    </form>
  </section>
  `
}

function createProfile(event) {
  event.preventDefault()
  const form = event.target

  const data = Object.fromEntries(new FormData(form))

  fetch('/api/profiles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(profiles => {
      state.profiles.psuh(profile)
      renderProfileList()
    })
}

