const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const toggleTheme = document.getElementById("toggle-theme");

function sendMessage() {
  const msg = input.value.trim();
  if (msg === "") return;

  // User message
  addMessage("user", msg);
  input.value = "";

  // Bot thinking...
  setTimeout(() => {
    const reply = getSmartReply(msg);
    addMessage("bot", reply);
  }, 600);
}

function addMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.innerText = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getSmartReply(msg) {
  const input = msg.toLowerCase();

  // Simple smart replies
  if (input.includes("hello") || input.includes("hi")) {
    return "Hi there! Kaise ho?";
  } else if (input.includes("how are you")) {
    return "Main theek hoon, tum sunao?";
  } else if (input.includes("name")) {
    return "Mera naam SmartBot hai!";
  } else if (input.includes("weather")) {
    return "Mujhe lagta hai mausam theek hai. Tum batao?";
  } else if (input.includes("joke")) {
    return "Ek joke suno: ChatGPT kab sota hai? Jab server down hota hai! 😄";
  } else if (input.includes("bye")) {
    return "Allah Hafiz! Phir milte hain.";
  } else {
    return "Hmm... Ye thoda mushkil sawaal hai. Aur kuch poocho?";
  }
}

// Theme toggle
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
