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
