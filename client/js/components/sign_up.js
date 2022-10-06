function renderSignUp() {
  document.querySelector('#page').innerHTML = `
    <section class='sign-up'>
      <form onSubmit="signUp(event)">
        <h2>Sign Up:</h2>
        <fieldset>
          <label for="">Name: </label>
          <input type="text" placeholder="Name" name="name">
        </fieldset>
        <fieldset>
          <label for="">Email: </label>
          <input type="text" placeholder="Email" name="email">
        </fieldset>
        <fieldset>
          <label for="">Password: </label>
          <input type="password" placeholder="Password" name="password" id="textbox">
        </fieldset>
        <button >Sign Up</button>
      </form>
    </section>
  `
}

function signUp(event) {
  event.preventDefault()
  const form = event.target

  const data = Object.fromEntries(new FormData(form))

  fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(userName => {
      if(userName.error) {
        renderSignUp()
        renderError(userName.error)
      }else{
      state.loggedInUserName = userName
      renderProfileList()
      }
    })
  }


function renderError(errorMessage){
  const page = document.querySelector('#page')
  page.innerHTML =
    `<h2 style='color: red;'>${errorMessage}</h2>` +
    page.innerHTML
}




