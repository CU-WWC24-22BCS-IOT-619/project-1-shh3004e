document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate password
    if (password !== confirmPassword) {
        document.getElementById('signupMessage').textContent = "Passwords do not match!";
        return;
    }

    // Simulate storing data in a database (you would replace this with actual database logic)
    const userData = {
        name: name,
        email: email,
        password: password
    };

    // Simulate a successful signup
    console.log("User  data saved:", userData);
    document.getElementById('signupMessage').textContent = "Signup successful! Redirecting...";

    // Redirect to home page after a short delay
    setTimeout(() => {
        window.location.href = 'Home.html'; // Redirect to home page
    }, 2000); // 2 seconds delay
});