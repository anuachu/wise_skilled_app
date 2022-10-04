const state = {
  profiles: []
}

fetch('/api/profiles')
  .then(res => res.json())
  .then(profiles => {
    state.profiles = profiles
    renderProfileList()
  })