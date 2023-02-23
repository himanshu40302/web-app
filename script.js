function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    document.getElementById("display-name").innerText = name;
    document.getElementById("display-email").innerText = email;
    document.getElementById("contact-form").classList.add("hidden");
    document.getElementById("display-section").classList.remove("hidden");
  }
  


  const imageInput = document.getElementById('imageInput');
  const imageContainer = document.getElementById('imageContainer');
  
  imageInput.addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();
  
    reader.addEventListener('load', function() {
      const image = new Image();
      image.src = reader.result;
  
      image.addEventListener('load', function() {
        imageContainer.innerHTML = '';
        imageContainer.appendChild(image);
  
        // make the image resizable
        image.style.maxWidth = '100%';
        image.style.maxHeight = '100%';
      });
    });
  
    reader.readAsDataURL(file);
  });
  