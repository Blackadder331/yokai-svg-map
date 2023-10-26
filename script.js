document.addEventListener("DOMContentLoaded", function () {
  const headline = document.getElementById("headline");
  const info = document.getElementById("info");

  document.getElementById("location1").addEventListener("click", function () {
    headline.textContent = "Location 1";
    info.textContent = "This is the information about Location 1.";
  });

  document.getElementById("location2").addEventListener("click", function () {
    headline.textContent = "Location 2";
    info.textContent = "This is the information about Location 2.";
  });

  document.getElementById("location3").addEventListener("click", function () {
    headline.textContent = "Location 3";
    info.textContent = "This is the information about Location 3.";
  });
});
