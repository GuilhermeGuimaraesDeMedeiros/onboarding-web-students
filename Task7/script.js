document.addEventListener("DOMContentLoaded", () => {
  // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


  const fillFormBtn = document.getElementById("fillFormBtn")

  fillFormBtn.addEventListener('click', () => {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      const user = data.results[0]
      document.getElementById("firstName").value = user.name.first
      document.getElementById("lastName").value = user.name.last
      document.getElementById("email").value = user.email
      document.getElementById("contact").value = user.phone
    })
    .catch(error => console.error("Erro ao buscar dados do usuário", error))
  })

  
})





