let summitbutton=document.getElementById("summitbutton")

summitbutton.addEventListener('summit',event=> {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
    form.classList.add('was-validated')
  }, false)

