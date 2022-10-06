function renderLogin() {
  document.querySelector('#page').innerHTML = `
    <section class='log-in'>
      <form onSubmit="login(event)">
        <h2>Login:</h2>
        <fieldset>
          <label for="">Email: </label>
          <input type="text" name="email">
        </fieldset>
        <fieldset>
          <label for="">Password: </label>
          <input type="password" name="password">
        </fieldset>
        <button>Login</button>
      </form>
    </section>
  `
}

function login(event) {
  event.preventDefault()
  const form = event.target

  const data = Object.fromEntries(new FormData(form))

  fetch('/api/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        renderLogin()
        renderError(res.error)
      }else {
        const userName = res
        state.loggedInUserName = userName
        if(state.loggedInUserName == userName){
        renderNavBar()
        renderNavBarMobile()
        renderProfileList()
        }
      }
    })
}

function renderError(errorMessage) {
  const page = document.querySelector('#page')
  page.innerHTML =
    `<h2 class="error" style='color: red;'>${errorMessage}</h2>` +
    page.innerHTML
}

function renderLogout() {
  state.loggedInUserName = null
  renderNavBarMobileWhenNotLoggedIn()
  renderNavWhenNotLogin()
  renderProfileList()
}