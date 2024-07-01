// const timeEl = document.querySelector(".utc-time");
// const weekdayEl = document.querySelector(".day-of-week");
document.addEventListener("DOMContentLoaded", () => {
  function updateTime() {
    const now = new Date();
    const year = now.getUTCFullYear();
    const hour = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();

    document.querySelector(
      ".utc-time"
    ).textContent = `${hour} : ${minutes}: ${seconds} GMT`;
    document.querySelector(".day-of-week").textContent = now.toLocaleString(
      "en-NG",
      { weekday: "long" }
    );
  }

  updateTime();
  setInterval(updateTime, 1000);
});
