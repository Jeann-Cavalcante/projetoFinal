let users = getUser();
let error_name = document.querySelector("#error-name");
let error_email = document.querySelector("#error-email");
let error_photo = document.querySelector("#error-photo");
let error_password = document.querySelector("#error-password");
let error_confirm_password = document.querySelector("#error-confirm-password");


const form = document.querySelector("#form");

form.addEventListener("submit", registrationUser);

function registrationUser(e) {
  e.preventDefault();

  const registration = {
    id: getUser().length + 1,
    name: e.target[0].value,
    email: e.target[1].value,
    photo: e.target[2].value,
    password: e.target[3].value,
  };

  const confirmPassword = e.target[4].value;
  const userAlreadyExists = users.find(
    (user) => user.email === registration.email
  );

  if (registration.name == "") {
    error_name.innerHTML = "O campo nome é obrigatório";
  } else if (registration.email == "") {
    error_email.innerHTML = "O campo e-mail é obrigatório";
  }
  else if (registration.photo == "") {
    error_photo.innerHTML = "O link da foto é obrigatório";
  }
   else if (userAlreadyExists) {
    error_email.innerHTML = "E-mail já cadastrado";

  } else if (registration.password == "") {
    error_password.innerHTML = "O campo senha é obrigatório";

  } else if (registration.password != confirmPassword) {
    error_confirm_password.innerHTML = "As senhas não conferem";

  } else {
    // users.push(registration);
    chamaAlert("Cadastro realizado com sucesso");
    let newuser = [...users, registration]
    setUser(newuser);
    e.target.reset();
    window.location.href = "../index.html";
  }
}
