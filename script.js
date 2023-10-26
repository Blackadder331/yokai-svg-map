// document.addEventListener("DOMContentLoaded", function () {
//   const headline = document.getElementById("headline");
//   const info = document.getElementById("info");

//   document.getElementById("location1").addEventListener("click", function () {
//     headline.textContent = "Location 1";
//     info.textContent = "This is the information about Location 1.";
//   });

//   document.getElementById("location2").addEventListener("click", function () {
//     headline.textContent = "Location 2";
//     info.textContent = "This is the information about Location 2.";
//   });

//   document.getElementById("location3").addEventListener("click", function () {
//     headline.textContent = "Location 3";
//     info.textContent = "This is the information about Location 3.";
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const headline = document.getElementById("headline");
  const info = document.getElementById("info");

  const location1 = document.getElementById("location1");
  const location2 = document.getElementById("location2");
  const location3 = document.getElementById("location3");

  const handleClick = (event, title, description) => {
    headline.textContent = title;
    info.textContent = description;

    // Remove selected class from all shapes
    [location1, location2, location3].forEach((el) =>
      el.classList.remove("selected")
    );

    // Add selected class to clicked shape
    event.currentTarget.classList.add("selected");
  };

  location1.addEventListener("click", (event) =>
    handleClick(
      event,
      "Location 1",
      "This is the information about Location 1."
    )
  );
  location2.addEventListener("click", (event) =>
    handleClick(
      event,
      "Location 2",
      "This is the information about Location 2."
    )
  );
  location3.addEventListener("click", (event) =>
    handleClick(
      event,
      "Location 3",
      "This is the information about Location 3."
    )
  );
});
