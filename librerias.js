let darkMode = localStorage.getItem('darkMode')
const darkModeToggle =document.querySelector('#bDark')


const activarDarkMode = () =>{
    document.body.classList.add('darkmode')

    localStorage.setItem('darkMode', 'activado')
}
const desactivarDarkMode = () =>{
    document.body.classList.remove('darkmode')

    localStorage.setItem('darkMode', 'desactivado')
}
if(darkMode == 'activado'){
    activarDarkMode()
}
darkModeToggle.addEventListener('click',()=>{
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'activado'){
        activarDarkMode()
    } else{
        desactivarDarkMode()
    }
    
})
let cuenta = document.querySelector(".nav-link.dropdown-toggle")

cuenta.addEventListener('click',() =>{
    const { value: email } = Swal.fire({
        title: 'Input email address',
        input: 'email',
        inputLabel: 'Your email address',
        inputPlaceholder: 'Enter your email address'
      })
      
      if (email) {
        Swal.fire(`Entered email: ${email}`)
      }
    })


