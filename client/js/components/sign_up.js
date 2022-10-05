function renderSignUp() {
  document.querySelector('#page').innerHTML = `
    <section class='sign-up'>
      <form onSubmit="signUp(event)">
        <h2>Sign Up:</h2>
        <fieldset>
          <label for="">Name: </label>
          <input type="text" name="name">
        </fieldset>
        <fieldset>
          <label for="">Email: </label>
          <input type="text" name="email">
        </fieldset>
        <fieldset>
          <label for="">Password: </label>
          <input type="password" name="password" id="textbox"  >
        </fieldset>
        <button onClick="checkLength()" >Sign Up</button>
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
      state.loggedInUserName = userName
      renderProfileList()
    })
}

function checkLength(errorMessage){
  var textbox = document.getElementById("textbox");
  if(textbox.value.length <= 10 && textbox.value.length >= 5){
      alert("success");
  }
  else{
      alert("make sure the input is between 5-10 characters long")
      textbox.innerHTML =
      `<h2 style='color: red;'>${errorMessage}</h2>` +
      textbox.innerHTML
      renderSignUp()
  }
}

