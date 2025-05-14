function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  document.getElementById("current-time").textContent = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000);
console.log(updateTime());

//battary
navigator.getBattery().then(function (battery) {
  function updateBatteryStatus() {
    const percent = Math.round(battery.level * 100);
    document.getElementById("battery").textContent = ` ${percent}% 
   `;
  }

  battery.addEventListener("chargingchange", function () {
    if (battery.charging) {
      alert("Batareya zaryadga ulandi!");
    } else {
      alert("Batareya zaryadga ulinmadi!");
    }
    updateBatteryStatus();
  });

  battery.addEventListener("levelchange", updateBatteryStatus);

  updateBatteryStatus();
});
