



async function signup() {
  var users = [];
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var adress = document.getElementById("adress").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  var user = {
    name,
    age,
    adress,
    email,
    pass
  };
  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
    users.push(user);
    console.log(users)
  }
  else {
    users.push(user);
  }
  localStorage.setItem('users', JSON.stringify(users));
  window.location.href = "sing_in.html"
}


