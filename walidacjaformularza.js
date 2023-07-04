function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
  
    var nameRegex = /^[a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^(\+?48)?[ -]?(\d{3}[ -]?){2}\d{3}$/;
  
    if (!nameRegex.test(name)) {
      alert("Proszę podać prawidłowe imię.");
      return false;
    }
  
    if (!emailRegex.test(email)) {
      alert("Proszę podać prawidłowy adres e-mail.");
      return false;
    }
  
    if (!phoneRegex.test(phone)) {
      alert("Proszę podać prawidłowy numer telefonu.");
      return false;
    }
  }  