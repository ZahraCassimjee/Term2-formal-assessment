let allStudents = [];

addStudent = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = +document.getElementById("number").value;
  let subject = document.getElementById("subject").value;
  let pass = document.getElementById("password").value;
  let checkbox = document.getElementById("checkbox").checked;

  if (!checkbox) {
    alert(
      "Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested, " +
        name +
        "! If you want to sign up, you better CHECK that newsletter box!"
    );
  } else {
    alert(
      "Welcome " +
        name +
        "! Thank you for your interest in " +
        subject +
        "! We will contact you via the email provided: " +
        email +
        ", or alternatively on the phone number: " +
        number
    );
  }

  allStudents.push({
    fullName: name,
    emailAd: email,
    contact: number,
    studentSubject: subject,
    password: pass,
  });

  console.log(allStudents);

  document.getElementById("studentForm").reset();
};
