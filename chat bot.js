const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");
const messagesContainer = document.getElementById("messages");

const API_KEY = "YOUR_API_KEY"; // Replace with your OpenAI API key

sendButton.addEventListener("click", async () => {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    // Display user message
    appendMessage("You: " + userMessage);
    userInput.value = "";

    // Get AI response
    const aiResponse = await getAIResponse(userMessage);
    appendMessage("AI: " + aiResponse);
});

function appendMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to bottom
}

async function getAIResponse(message) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }]
        })
    });

    if (!response.ok) {
        const error = await response.json();
        console.error("Error:", error);
        return "Sorry, I couldn't process your request.";
    }

    const data = await response.json();
    return data.choices[0].message.content;
}