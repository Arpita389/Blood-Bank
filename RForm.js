document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");

  function submitForm(event) {
    event.preventDefault();

    var fullname = document.getElementById("fullname").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var bg = document.getElementById("bg").value;
    var hospital = document.getElementById("hospital").value;
    var ward = document.getElementById("ward").value;
    var record = document.getElementById("record").value;

    // Create an object with the form data
    var formData = {
      fullname: fullname,
      dob: dob,
      gender: gender,
      bg: bg,
      hospital: hospital,
      ward: ward,
      record: record,
    };

    // Send the form data to the server
    fetch("http://localhost:8080/Reciever", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(function (response) {
        if (response.ok) {
          console.log("Form submitted successfully");
          alert("Form submitted successfully");
        } else {
          console.error("Form submission failed");
          alert("Form submission failed");
        }
      })
      .catch(function (error) {
        console.error("An error occurred while submitting the form:", error);
      });

    form.reset();
  }

  form.addEventListener("submit", submitForm);
});
