const deleteForm = document.querySelector("#delete-form");

deleteForm &&
  deleteForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Stopping the default submit
    console.log("Now I am the master");
    const promptContainer = document.querySelector("#prompt-container");
    //   promptContainer.setAttribute("id", "prompt-container");
    const deleteButton = document.createElement("button");
    const cancelButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    cancelButton.textContent = "Cancel";

    promptContainer.textContent = "Are you sure you want to delete this item";
    promptContainer.appendChild(deleteButton);
    promptContainer.appendChild(cancelButton);

    cancelButton.addEventListener("click", (evt) => {
      promptContainer.style.display = "none";
    });

    deleteButton.addEventListener("click", async (evt) => {
      evt.preventDefault();
      console.log("Delete fired");
      await fetch(event.target.action, {
        method: "DELETE",
      });

      window.location.href = event.target.action
        .split("/")
        .splice(0, 6)
        .join("/");
    });

    promptContainer.style.display = "block";
  });
