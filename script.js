function sendMessage() {
  const input = document.getElementById("messageInput");
  const message = input.value.trim();

  if (message === "") return;

  const li = document.createElement("li");
  li.textContent = message;
  document.getElementById("messages").appendChild(li);

  input.value = "";
}
