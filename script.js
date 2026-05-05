window.onload = function () {
    const message = document.getElementById("message");
    message.textContent = "";
    message.style.display = "none";
};

function handleSubmit(event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    const message = document.getElementById("message");
    message.textContent = "Message sent successfully!";
    message.style.display = "block";

    event.target.reset();
}
