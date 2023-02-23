function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    document.getElementById("display-name").innerText = name;
    document.getElementById("display-email").innerText = email;
    document.getElementById("contact-form").classList.add("hidden");
    document.getElementById("display-section").classList.remove("hidden");
  }
  










 