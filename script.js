emailjs.init("-iMv3laRgDdv_z8dZ");

function sendMail() {
  var params = {
    name: document.getElementById("fullName").value.trim(),
    email: document.getElementById("senderEmail").value.trim(),
    phoneNumber: document.getElementById("sendPhoneNumber").value.trim(),
    subject: document.getElementById("senderSubject").value.trim(),
    emailBody: document.getElementById("senderEmailBody").value.trim(),
    reply_to: document.getElementById("senderEmail").value.trim(),
  };

  if (
    !params.name ||
    !params.email ||
    !params.phoneNumber ||
    !params.subject ||
    !params.emailBody
  ) {
    alert("Please fill in all fields before sending.");
    return;
  }

  const serviceId = "service_mv61a5m";
  const templateId = "template_l6yqrwz";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("contactForm").reset();
      console.log("Email sent successfully:", res);
      alert("Your message has been sent successfully!");
    })
    .catch((err) => {
      console.error("Error sending email: ", err);
      alert("Failed to send email. Please try again.");
    });
}

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelector("section");
let navLinks = document.querySelector("header nav");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        let activeLink = document.querySelector(`header nav a[href*='${id}']`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
