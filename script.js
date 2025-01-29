function sendMail() {
  var params = {
    name: document.getElementById("fullName").value,
    email: document.getElementById("senderEmail").value,
    phoneNumber: document.getElementById("sendPhoneNumber").value,
    subject: document.getElementById("senderSubject").value,
    emailBody: document.getElementById("senderEmailBody").value,
  };

  const serviceId = "service_mv61a5m";
  const templateId = "template_l6yqrwz";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      document.getElementById("fullName").value = "";
      document.getElementById("senderEmail").value = "";
      document.getElementById("sendPhoneNumber").value = "";
      document.getElementById("senderSubject").value = "";
      document.getElementById("senderEmailBody").value = "";
      console.log(res);
      alert("Your Mail Sent Successfully!");
    })
    .catch((err) => console.log("Error sending email: ", err));
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
