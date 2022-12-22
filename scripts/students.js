let students = getStudent();
const modal_bg = document.querySelector("#modal-bg");
const modal = document.querySelector("#modal");
const buttonNewStudent = document.querySelector("#btn-newStudent");
const closeButton = document.querySelector(".ph-x");
const tBody = document.querySelector("#tbody");
const spanTable = document.querySelector("#span_table");
const table = document.querySelector("#table");
const form = document.querySelector("#form-student");
const btnCadastrar = document.querySelector("#btn-cadastrar");
const btnEditar = document.querySelector("#btn-editar");

let error_name_modal = document.querySelector("#error-name-modal");
let error_cep_modal = document.querySelector("#error-cep-modal");
let error_cidade_modal = document.querySelector("#error-cidade-modal");
let error_estado_modal = document.querySelector("#error-estado-modal");

let inputName = document.querySelector("#name");
let inputCep = document.querySelector("#cep");
let inputCidade = document.querySelector("#cidade");
let inputEstado = document.querySelector("#estado");

const registrationUserModal = (student) => {
  if (student.name == "") {
    error_name_modal.innerHTML = "O campo nome é obrigatório";
  } else if (student.cep == "") {
    error_cep_modal.innerHTML = "O campo CEP é obrigatório";
  } else if (student.cidade == "") {
    error_cidade_modal.innerHTML = "O campo cidade é obrigatório";
  } else if (student.estado == "") {
    error_estado_modal.innerHTML = "O campo estado é obrigatório";
  } else {
    let newStudantes = [...students, student];
    setStudent(newStudantes);
    modal_bg.style.display = "none";
    modal.style.display = "none";
    window.location.reload();
    chamaAlert("Cadastro de estudante realizado com sucesso");
  }
};

buttonNewStudent.addEventListener("click", () => {
  modal_bg.style.display = "block";
  modal.style.display = "block";
  btnCadastrar.style.display = "block";
  btnEditar.style.display = "none";
});

closeButton.addEventListener("click", () => {
  modal_bg.style.display = "none";
  modal.style.display = "none";
});

modal_bg.addEventListener("click", () => {
  modal_bg.style.display = "none";
  modal.style.display = "none";
});

btnCadastrar.addEventListener("click", () => {
  form.addEventListener("submit", newStudent);
});


function newStudent(e) {
  e.preventDefault();

  let data = new Date();
  let day = String(data.getDate()).padStart(2, "0");
  let month = String(data.getMonth() + 1).padStart(2, "0");
  let year = data.getFullYear();
  actualDate = day + "/" + month + "/" + year;

  let student = {
    id: students.length + 1,
    name: e.target[0].value,
    cep: e.target[1].value,
    cidade: e.target[2].value,
    estado: e.target[3].value,
    img: getUserLogado().photo,
    date: actualDate,
  };

  console.log(student);

  registrationUserModal(student);

  e.target.reset();
}

if (students.length == 0) {
  spanTable.textContent = `Nenhum aluno cadastrado`;
  table.style.display = "none";
} else {
  students.forEach((item) => {
    tBody.innerHTML += `              
  <tr>
    <td><img class="avatar" src="${item.img}" alt="Avatar"></td>
    <td>${item.name}</td>
    <td>${item.cep}</td>
    <td>${item.cidade}</td>
    <td>${item.estado}</td>
    <td>${item.date}</td>
    <td onclick="updateStudent(${item.id})"><i class="ph-pencil-simple"></i></td>
    <td onclick="deleteStudent(${item.id})"><i class="ph-trash"></i></td>
  </tr>
     `;
  });
}

function deleteStudent(id) {
  let newStudents = students.filter((item) => item.id != id);
  setStudent(newStudents);
  window.location.reload();
}

function updateStudent(id) {
  console.log(id);

  let student = students.find((item) => item.id == id);
  let studentsEdit = students.filter((item) => item.id != id);

  modal_bg.style.display = "block";
  modal.style.display = "block";


  inputName.value = student.name;
  inputCep.value = student.cep;
  inputCidade.value = student.cidade;
  inputEstado.value = student.estado;
  
  btnEditar.style.display = 'block'
  btnCadastrar.style.display = 'none'

  student.name = inputName.value;
  student.cep = inputCep.value;
  student.cidade = inputCidade.value;
  student.estado = inputEstado.value;
  
  setStudent([student, ...studentsEdit]);
}




btnEditar.addEventListener("click", () => {
  console.log('chegou no editar');
  window.location.reload();
});