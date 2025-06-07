const input = document.querySelector("input");
const ol = document.querySelector("ol");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const span = document.createElement("span");
  span.innerHTML = "✖";
  li.appendChild(span);

  ol.appendChild(li);
  input.value = "";
});

ol.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("Checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});

// ✅ ENTER key support for ToDo input
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    btn.click();
  }
});
