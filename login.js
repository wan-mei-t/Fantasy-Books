//Create an account fieldset
let createAccountButton = document.querySelector("#create-account-button");
let generatedUsername = document.querySelector("#generated-username");

createAccountButton.addEventListener ("click", function(){
  let inputName = document.querySelector("#create-account-name");
  let inputAge = document.querySelector("#create-account-age");
  let inputYear = document.querySelector("#create-account-year");
  let valid = 0;
  
  generatedUsername.innerText = "";
  
  if (inputName.value.length < 3)
    {
      generatedUsername.innerText += "Make sure your name has at least three letters.";
      inputName.style.border="1px solid red";
    }
  else
    {
      inputName.style.border="1px solid palegreen";
      valid++;
    }
  
  if (inputAge.valueAsNumber < 12 || inputAge.value.length < 2)
    {
      generatedUsername.innerText += " You have to be at least 12 years old to create an account.";
      inputAge.style.border="1px solid red";
    }
  else
    {
      inputAge.style.border="1px solid palegreen";
      valid++;
    }
  
  if (inputYear.valueAsNumber > 2010 || inputYear.valueAsNumber < 1922 || inputYear.value.length < 4)
    {
      generatedUsername.innerText += " You must be born before 2010 and after 1922.";
      inputYear.style.border="1px solid red";              
    }
  else
    {
      inputYear.style.border="1px solid palegreen";
      valid++;
    }
  
  if (valid === 3)
    {
      let name = inputName.value;
      let age = inputAge.value;
      let year = inputYear.value;
      let username = name + (age*year);
      generatedUsername.innerText = "Your generated username is: " + username;
      generatedUsername.innerText += ". You can modify your username once you login :)";
      
      document.querySelector("#create-account a").innerText = "Login";
      
      sessionStorage.setItem(generatedUsername, username);
    }
});


//Login fieldset
let loginButton = document.querySelector("#login-button");

loginButton.addEventListener("click", function () {
  let usernameInput = document.querySelector("#username");
  
  let username = sessionStorage.getItem(generatedUsername);
  
  if (usernameInput.value.length < 3)
    {
      document.querySelector("#login p").textContent = "Your username should be at least three characters";
    }
  else if (usernameInput.value === username)
    {
      document.querySelector("#login fieldset").style.display = "none";
      document.querySelector("#login fieldset:nth-child(3)").style.display = "none";
      document.querySelector("#login fieldset:nth-child(2)").style.display = "block";
    }
  else
    {
      document.querySelector("#login fieldset").style.display = "none";
      document.querySelector("#login fieldset:nth-child(3)").style.display = "block";
      document.querySelector("#login fieldset:nth-child(2)").style.display = "none";
    }
  
});