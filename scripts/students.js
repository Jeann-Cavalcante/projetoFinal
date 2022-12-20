const students = getStudent();

const form = document.querySelector("#form-student");

const table = document.querySelector("table");

const spanTable = document.querySelector("#span_table");

const modal_bg = document.querySelector("#modal-bg");

const buttonNewStudent = document.querySelector("#btn-newStudent");

const closeButton = document.querySelector(".ph-x");

form.addEventListener("submit", newStudent);

function newStudent(e) {
  let data = new Date();
  let day = String(data.getDate()).padStart(2, "0");
  let month = String(data.getMonth() + 1).padStart(2, "0");
  let year = data.getFullYear();
  actualDate = day + "/" + month + "/" + year;

  e.preventDefault();

  let student = {
    id: students.length + 1,
    name: e.target[0].value,
    cep: e.target[1].value,
    cidade: e.target[2].value,
    estado: e.target[3].value,
    date: actualDate,
  };

  console.log(student);

  registrationUserModal(student);

  e.target.reset();
}

if (students.length == 0) {
  spanTable.textContent = `Nenhum aluno cadastrado`;
} else {
  // const thead = createElement('thead');
  // const tbody = createElement('tbody');
  // const tr = createElement('tr');

  // thead.innerHTML = `
  // <tr>
  //                <th></th>
  //                <th>Nome</th>
  //                <th>CEP</th>
  //                <th>Cidade</th>
  //                <th>Estado</th>
  //                <th>Data de cadastro</th>
  //                <th></th>
  //                <th></th>
  //              </tr>
  // `;

  // students.forEach(item => {

  // });
  table.innerHTML += `
            <thead>
                <tr>
                <th></th>
                <th>Nome</th>
                <th>CEP</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Data de cadastro</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
             <tbody>
               <tr>
                 <td><img class="avatar" src="https://github.com/alefhyy.png" alt="Avatar"></td>
                 <td>Karthi</td>
                 <td>karthi@gmail.com</td>
                 <td>Garulhos</td>
                 <td>São Paulo</td>
                 <td>08-Dev, 2022</td>
                 <td><i class="ph-pencil-simple"></i></td>
                 <td><i class="ph-trash"></i></td>
               </tr>
             </tbody>
   `;
}

let error_name_modal = document.querySelector("#error-name-modal");
let error_cep_modal = document.querySelector("#error-cep-modal");
let error_cidade_modal = document.querySelector("#error-cidade-modal");
let error_estado_modal = document.querySelector("#error-estado-modal");

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
    chamaAlert("Cadastro de estudante realizado com sucesso");
  }
};

buttonNewStudent.addEventListener("click", () => {
  modal_bg.style.display = "block";
});

closeButton.addEventListener("click", () => {
  modal_bg.style.display = "none";
});

modal_bg.addEventListener('click', () => {
  modal_bg.style.display = 'none'
})
