let user = getUserLogado();
// console.log(user)

const asideAvatar = document.querySelector('#aside_avatar')
const asideName = document.querySelector('#aside_name')
const botaoSair = document.querySelector('.div_btn-sair')

const logout = () => {
    const userLogado = []
    setUserLogado(userLogado)
    window.location.href = "../index.html";
}

const verifyUser = () => {
        if (user == []) {
          try {
           console.log(user)
           console.log('Chegou else')
           window.location.href = "../index.html";
       }catch (error) {
       console.log('Chegou no catch!')
       window.location.href = "../index.html";
   }
        } else {
          console.log('Chegou no if!')
          asideAvatar.src = user.photo
          asideName.innerHTML = user.name
    } 
}

verifyUser()

botaoSair.addEventListener('click', logout)
