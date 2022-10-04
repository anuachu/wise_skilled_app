const state = {
  profiles: [],
  loggedInUserName: null
}

fetch('/api/profiles')
  .then(res => res.json())
  .then(profiles => {
    state.profiles = profiles
    renderProfileList()
  })

fetch('/api/sessions')
  .then(res => res.json())
  .then(userName => {
    if (typeof userName === 'string') {
      state.loggedInUserName = userName
    }
})