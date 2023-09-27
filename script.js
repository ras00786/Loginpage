
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const signupButton = document.getElementById("signupButton");

    loginButton.addEventListener("click", function () {
        const taskInput = document.getElementById("task").value;
        const emailInput = document.getElementById("email").value;
        alert(`Logged in with Task: ${taskInput}, Email: ${emailInput}`);
        const newTabUrl = `https://example.com?task=${taskInput}&email=${emailInput}`;

        window.open(newTabUrl, "_blank"); // Open a new tab
    });

    signupButton.addEventListener("click", function () {
        const taskInput = document.getElementById("task").value;
        const emailInput = document.getElementById("email").value;
        alert(`Signed up with Task: ${taskInput}, Email: ${emailInput}`);
        const newTabUrl = `https://example.com?task=${taskInput}&email=${emailInput}`;

        window.open(newTabUrl, "_blank"); // Open a new tab
        
    });
});
