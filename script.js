const headline = document.getElementById("headline");
const info = document.getElementById("info");

document.addEventListener("DOMContentLoaded", function () {
  const headline = document.getElementById("headline");
  const info = document.getElementById("info");

  const location1 = document.getElementById("location1");
  const location2 = document.getElementById("location2");
  const location3 = document.getElementById("location3");
  const yokaiNamesDiv = document.getElementById("yokai-names");

  const handleClick = (event, title, description, yokaiName) => {
    // Remove the selected class from all shapes and add to the clicked shape
    [location1, location2, location3].forEach((el) => {
      if (el) el.classList.remove("selected");
    });
    event.currentTarget.classList.add("selected");

    // Remove any existing animation classes to reset the state
    headline.classList.remove("h1-animate-in");
    info.classList.remove("info-fade-in");

    // Start the fade-out and slide-out animations
    headline.classList.add("h1-animate-out");
    info.classList.add("info-fade-out");

    setTimeout(() => {
      // Update the text content
      headline.textContent = title;
      info.textContent = description;

      // Remove the fade-out and slide-out classes
      headline.classList.remove("h1-animate-out");
      info.classList.remove("info-fade-out");

      // Start the fade-in and slide-in animations
      headline.classList.add("h1-animate-in");
      info.classList.add("info-fade-in");
    }, 1000); // Wait for 1 second, which should be the duration of the fade-out and slide-out animations

    // Remove the selected class from all shapes and add to the clicked shape
    [location1, location2, location3].forEach((el) => {
      if (el) el.classList.remove("selected");
    });
    event.currentTarget.classList.add("selected");

    // // Update Yokai name display
    yokaiNamesDiv.innerHTML = `<div class="yokai-name">${yokaiName}</div>`;

    // // Calculate and set height for smooth transition
    // const newHeight = yokaiNamesDiv.scrollHeight;
    // yokaiNamesDiv.style.height = `${newHeight}px`;
    yokaiNamesDiv.style.display = "block";
  };

  location1.addEventListener("click", (event) =>
    handleClick(
      event,
      "Umibōzu",
      "A sea spirit known for its ability to conjure storms, Umibōzu appears as a giant shadowy figure on calm ocean waters.",
      "海坊主"
    )
  );

  location2.addEventListener("click", (event) =>
    handleClick(
      event,
      "Yuki-Onna",
      "A snow woman who appears during heavy snowfalls, she is known for her beauty and icy touch that can freeze humans instantly.",
      "雪女"
    )
  );

  location3.addEventListener("click", (event) =>
    handleClick(
      event,
      "Noppera-bō",
      "A faceless ghost that terrifies its victims by appearing as a person they know, only to wipe away its face.",
      "のっぺら坊"
    )
  );
});
